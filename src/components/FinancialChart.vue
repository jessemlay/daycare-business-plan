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
  DoughnutController
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
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    },
    chartType: {
      type: String,
      default: 'bar',
      validator: (value) => ['bar', 'line', 'doughnut'].includes(value)
    },
    chartId: {
      type: String,
      default: 'financial-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.createChart()
  },
  watch: {
    chartData: {
      handler() {
        if (this.chart) {
          this.chart.destroy()
        }
        this.createChart()
      },
      deep: true
    }
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy()
    }
  },
  methods: {
    createChart() {
      const ctx = document.getElementById(this.chartId)
      if (!ctx) return

      const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Financial Data'
          },
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                if (context.dataset.label && context.parsed.y !== undefined) {
                  return context.dataset.label + ': $' + context.parsed.y.toLocaleString()
                }
                return context.label + ': ' + context.parsed
              }
            }
          }
        }
      }

      if (this.chartType !== 'doughnut') {
        defaultOptions.scales = {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value.toLocaleString()
              }
            }
          }
        }
      }

      const options = { ...defaultOptions, ...this.chartOptions }

      this.chart = new ChartJS(ctx, {
        type: this.chartType,
        data: this.chartData,
        options: options
      })
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
  width: 100%;
}
</style>
