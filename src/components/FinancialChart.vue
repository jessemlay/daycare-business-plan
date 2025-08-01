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
      // Immediately stop all chart operations
      if (this.chart) {
        try {
          this.chart.stop()
        } catch (e) {
          // Ignore errors
        }
      }
      this.destroyChart()
    },
    beforeRouteLeave() {
      // Ensure chart is destroyed before route change
      this.isDestroyed = true
      // Immediately stop all chart operations
      if (this.chart) {
        try {
          this.chart.stop()
        } catch (e) {
          // Ignore errors
        }
      }
      this.destroyChart()
    },
    deactivated() {
      // Handle keep-alive deactivation
      this.isDestroyed = true
      if (this.chart) {
        try {
          this.chart.stop()
        } catch (e) {
          // Ignore errors
        }
      }
      this.destroyChart()
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
      destroyChart() {
        if (this.chart) {
          try {
            // Stop any ongoing animations immediately
            this.chart.stop()
            // Clear any pending animation frames
            if (this.chart.ctx && this.chart.ctx.canvas) {
              const canvas = this.chart.ctx.canvas
              // Clear the canvas completely
              this.chart.ctx.clearRect(0, 0, canvas.width, canvas.height)
            }
            // Destroy the chart instance
            this.chart.destroy()
          } catch (error) {
            // eslint-disable-next-line no-console
            console.warn(`Error destroying chart "${this.chartId}":`, error)
          } finally {
            this.chart = null
          }
        }
      },
      createChart() {
        // Prevent operations on destroyed component
        if (this.isDestroyed) {
          return
        }

        const canvas = document.getElementById(this.chartId)
        if (!canvas) {
          // eslint-disable-next-line no-console
          console.warn(`Canvas element with ID "${this.chartId}" not found`)
          return
        }

        // Ensure the canvas is connected to the DOM
        if (!canvas.isConnected) {
          // eslint-disable-next-line no-console
          console.warn(`Canvas element "${this.chartId}" is not connected to DOM`)
          return
        }

        const ctx = canvas.getContext('2d')
        if (!ctx) {
          // eslint-disable-next-line no-console
          console.warn(`Cannot get 2D context for canvas "${this.chartId}"`)
          return
        }

        // Validate chart data
        if (!this.chartData || !this.chartData.datasets) {
          return
        }

        // Destroy existing chart if it exists
        if (this.chart) {
          this.destroyChart()
        }

        try {
          this.chart = new ChartJS(ctx, {
            type: this.chartType,
            data: this.chartData,
            options: {
              responsive: true,
              maintainAspectRatio: false,
              animation: false, // Disable all animations to prevent null context errors
              transitions: {
                active: {
                  animation: {
                    duration: 0,
                  },
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
          // Double-check that component isn't destroyed
          if (this.isDestroyed) {
            return
          }

          // Verify the chart still has a valid canvas context
          if (!this.chart.canvas || !this.chart.canvas.getContext('2d')) {
            // eslint-disable-next-line no-console
            console.warn('Chart canvas context is invalid, recreating chart')
            this.createChart()
            return
          }

          // Stop any ongoing operations before updating
          this.chart.stop()
          this.chart.data = this.chartData
          this.chart.update('none') // Use 'none' mode to prevent animations during updates
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error updating chart:', error)
          // Don't try to recreate if component is destroyed
          if (!this.isDestroyed) {
            this.createChart()
          }
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
