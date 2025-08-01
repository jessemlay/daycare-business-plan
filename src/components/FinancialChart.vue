<template>
  <div class="chart-container">
    <canvas :id="chartId"></canvas>
  </div>
</template>

<script>
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarController,
    LineController,
    DoughnutController,
  } from 'chart.js'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarController,
    LineController,
    DoughnutController
  )

  export default {
    name: 'FinancialChart',
    props: {
      chartData: {
        type: Object,
        required: true,
      },
      chartOptions: {
        type: Object,
        default: () => ({}),
      },
      chartType: {
        type: String,
        default: 'bar',
      },
    },
    data() {
      return {
        chart: null,
        chartId: `chart-${Math.random().toString(36).substr(2, 9)}`,
        isDestroyed: false,
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.createChart()
      })
    },
    beforeUnmount() {
      this.isDestroyed = true
      if (this.chart && typeof this.chart.destroy === 'function') {
        try {
          this.chart.destroy()
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(`Error destroying chart "${this.chartId}":`, error)
        } finally {
          this.chart = null
        }
      }
    },
    unmounted() {
      // Additional cleanup for Vue 3 compatibility
      this.isDestroyed = true
      this.chart = null
    },
    watch: {
      chartData: {
        handler() {
          if (!this.isDestroyed) {
            this.updateChart()
          }
        },
        deep: true,
      },
    },
    methods: {
      createChart() {
        // Prevent operations on destroyed component
        if (this.isDestroyed) {
          return
        }

        const canvas = document.getElementById(this.chartId)
        if (!canvas) {
          return
        }

        // Ensure the canvas is connected to the DOM
        if (!canvas.isConnected) {
          return
        }

        const ctx = canvas.getContext('2d')
        if (!ctx) {
          return
        }

        // Validate chart data
        if (!this.chartData || !this.chartData.datasets) {
          return
        }

        // Destroy existing chart if it exists
        if (this.chart) {
          try {
            this.chart.destroy()
          } catch (error) {
            // eslint-disable-next-line no-console
            console.warn('Error destroying existing chart:', error)
          }
        }

        try {
          this.chart = new ChartJS(ctx, {
            type: this.chartType,
            data: this.chartData,
            options: {
              responsive: true,
              maintainAspectRatio: false,
              animation: {
                onComplete: () => {
                  // Ensure component is still mounted when animation completes
                  if (this.isDestroyed) {
                    return
                  }
                },
              },
              ...this.chartOptions,
            },
          })
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error creating chart:', error)
        }
      },
      updateChart() {
        if (this.isDestroyed || !this.chart) {
          return
        }

        try {
          this.chart.data = this.chartData
          this.chart.update()
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error updating chart:', error)
          // Try to recreate the chart if update fails
          this.createChart()
        }
      },
    },
  }
</script>

<style scoped>
  .chart-container {
    position: relative;
    height: 400px;
    width: 100%;
  }

  canvas {
    max-width: 100%;
    height: auto;
  }
</style>
