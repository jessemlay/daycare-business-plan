<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-house-door me-2"></i>Business Overview</h5>
      </div>
      <div class="card-body">
        <!-- Executive Summary -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card border-primary">
              <div class="card-header">
                <h5><i class="bi bi-star me-2"></i>Executive Summary</h5>
              </div>
              <div class="card-body">
                <!-- Business Header with Logo and Contact Info -->
                <div class="text-center mb-4 py-3 border-bottom">
                  <img
                    src="@/assets/logo-transparent.png"
                    alt="Kid Zone Logo"
                    class="mb-3"
                    style="width: 220px; height: 220px; object-fit: contain"
                  />
                  <h3 class="text-primary mb-1">Kid Zone</h3>
                  <h5 class="text-muted mb-3">Drop-In Childcare Business Plan</h5>

                  <div class="row">
                    <div class="col-md-6">
                      <h6 class="text-primary mb-2">
                        <i class="bi bi-people-fill me-2"></i>Business Owners
                      </h6>
                      <p class="mb-1"><strong>Jesse Lay & Erminia Lay</strong></p>
                    </div>
                    <div class="col-md-6">
                      <h6 class="text-primary mb-2">
                        <i class="bi bi-telephone-fill me-2"></i>Contact Information
                      </h6>
                      <p class="mb-1"><i class="bi bi-phone me-2"></i>Phone: 512-705-7168</p>
                      <p class="mb-1">
                        <i class="bi bi-envelope me-2"></i>Email: eduenas@gmail.com
                      </p>
                      <p class="mb-0">
                        <i class="bi bi-geo-alt me-2"></i>Location: Fort Smith, Arkansas
                      </p>
                    </div>
                  </div>
                </div>

                <h6 class="text-primary">{{ executiveSummary.businessName }}</h6>
                <p>
                  {{ executiveSummary.description }}
                </p>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <h6 class="text-primary">Mission Statement</h6>
                    <p class="text-muted">
                      {{ executiveSummary.mission }}
                    </p>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-primary">Vision</h6>
                    <p class="text-muted">
                      {{ executiveSummary.vision }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Success Factors -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-trophy me-2"></i>Key Success Factors</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-for="factor in keySuccessFactors" :key="factor.title" class="col-md-3">
                    <div class="text-center">
                      <i :class="`${factor.icon} text-${factor.color}`" style="font-size: 2rem"></i>
                      <h6 class="mt-2">{{ factor.title }}</h6>
                      <p class="text-muted small">{{ factor.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Management Team -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-person-badge me-2"></i>Management & Operations</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="text-primary">{{ managementTeam.structure.title }}</h6>
                    <ul class="list-unstyled">
                      <li v-for="role in managementTeam.structure.roles" :key="role">
                        <strong>{{ role.split(':')[0] }}:</strong> {{ role.split(':')[1] }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-primary">{{ managementTeam.qualifications.title }}</h6>
                    <ul class="list-unstyled">
                      <li
                        v-for="qualification in managementTeam.qualifications.items"
                        :key="qualification"
                      >
                        <i class="bi bi-check text-success me-2"></i>{{ qualification }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-primary">{{ managementTeam.operations.title }}</h6>
                    <ul class="list-unstyled">
                      <li v-for="operation in managementTeam.operations.items" :key="operation">
                        <strong>{{ operation.split(':')[0] }}:</strong>
                        {{ operation.split(':')[1] }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Highlights -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card border-success">
              <div class="card-header">
                <h6><i class="bi bi-currency-dollar me-2"></i>Financial Highlights</h6>
              </div>
              <div class="card-body">
                <div class="row text-center">
                  <div class="col-md-3">
                    <h6>{{ dynamicFinancialHighlights.metrics.startupInvestment.label }}</h6>
                    <h4 class="text-primary">
                      {{ dynamicFinancialHighlights.metrics.startupInvestment.value }}
                    </h4>
                    <small class="text-muted">{{
                      dynamicFinancialHighlights.metrics.startupInvestment.description
                    }}</small>
                  </div>
                  <div class="col-md-3">
                    <h6>{{ dynamicFinancialHighlights.metrics.monthlyRevenue.label }}</h6>
                    <h4 class="text-success">
                      {{ dynamicFinancialHighlights.metrics.monthlyRevenue.value }}
                    </h4>
                    <small class="text-muted">{{
                      dynamicFinancialHighlights.metrics.monthlyRevenue.description
                    }}</small>
                  </div>
                  <div class="col-md-3">
                    <h6>{{ dynamicFinancialHighlights.metrics.monthlyProfit.label }}</h6>
                    <h4 class="text-success">
                      {{ dynamicFinancialHighlights.metrics.monthlyProfit.value }}
                    </h4>
                    <small class="text-muted">{{
                      dynamicFinancialHighlights.metrics.monthlyProfit.description
                    }}</small>
                  </div>
                  <div class="col-md-3">
                    <h6>{{ dynamicFinancialHighlights.metrics.breakEven.label }}</h6>
                    <h4 class="text-info">
                      {{ dynamicFinancialHighlights.metrics.breakEven.value }}
                    </h4>
                    <small class="text-muted">{{
                      dynamicFinancialHighlights.metrics.breakEven.description
                    }}</small>
                  </div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-success">{{ dynamicGrowthProjections.title }}</h6>
                    <ul class="list-unstyled">
                      <li v-for="projection in dynamicGrowthProjections.items" :key="projection">
                        <strong>{{ projection.split(':')[0] }}:</strong>
                        {{ projection.split(':')[1] }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-success">{{ dynamicReturns.title }}</h6>
                    <ul class="list-unstyled">
                      <li v-for="returnItem in dynamicReturns.items" :key="returnItem">
                        <strong>{{ returnItem.split(':')[0] }}:</strong>
                        {{ returnItem.split(':')[1] }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Business Overview Charts -->
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-graph-up me-2"></i>Revenue Growth Projection</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="growthChartData"
                  :chartOptions="chartOptions"
                  chartType="line"
                  chartId="growth-chart"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-pie-chart me-2"></i>Investment Breakdown</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="investmentChartData"
                  :chartOptions="chartOptions"
                  chartType="doughnut"
                  chartId="investment-chart"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Fallback Content -->
        <div class="mt-4">
          <h6>{{ businessPlanSections.title }}</h6>
          <div class="row">
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li
                  v-for="section in businessPlanSections.leftColumn"
                  :key="section"
                  class="list-group-item"
                >
                  {{ section }}
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li
                  v-for="section in businessPlanSections.rightColumn"
                  :key="section"
                  class="list-group-item"
                >
                  {{ section }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FinancialChart from '@/components/FinancialChart.vue'
  import overviewData from '@/data/overviewData.json'
  import financialData from '@/data/financialData.json'
  import startupData from '@/data/startupData.json'

  export default {
    name: 'OverviewPage',
    components: {
      FinancialChart,
    },
    data() {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: false,
            },
          },
        },
        ...overviewData,
      }
    },
    computed: {
      growthChartData() {
        // Generate chart data from actual financial projections
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ]
        const monthlyRevenue = financialData.monthlyProjections.revenue
        const monthlyExpenses = financialData.monthlyProjections.expenses
        const monthlyNetIncome = financialData.monthlyProjections.netOperatingIncome

        return {
          labels: months,
          datasets: [
            {
              label: 'Revenue ($)',
              data: monthlyRevenue,
              borderColor: '#28a745',
              backgroundColor: 'rgba(40, 167, 69, 0.1)',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Expenses ($)',
              data: monthlyExpenses,
              borderColor: '#dc3545',
              backgroundColor: 'rgba(220, 53, 69, 0.1)',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Net Income ($)',
              data: monthlyNetIncome,
              borderColor: '#007bff',
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
              fill: true,
              tension: 0.4,
            },
          ],
        }
      },
      investmentChartData() {
        // Generate chart data from actual startup costs
        const startupCosts = startupData.startupCosts
        const labels = startupCosts.map((category) => category.category)
        const amounts = startupCosts.map((category) =>
          category.items.reduce((total, item) => total + item.cost, 0)
        )
        const colors = ['#28a745', '#007bff', '#ffc107', '#dc3545', '#6c757d', '#17a2b8']

        return {
          labels: labels,
          datasets: [
            {
              label: 'Startup Investment ($)',
              data: amounts,
              backgroundColor: colors.slice(0, labels.length),
              borderColor: colors.slice(0, labels.length).map((color) => color.replace('0.8', '1')),
              borderWidth: 2,
            },
          ],
        }
      },
      dynamicGrowthProjections() {
        // Calculate growth projections from actual financial data
        const year1Profit = financialData.monthlyProjections.totalNetIncome
        const year2Profit = Math.round(year1Profit * 1.15)
        const year3Profit = Math.round(year2Profit * 1.15)

        return {
          title: 'Growth Projections',
          items: [
            `Year 1: $${year1Profit.toLocaleString()} profit`,
            `Year 2: $${year2Profit.toLocaleString()} profit (15% growth)`,
            `Year 3: $${year3Profit.toLocaleString()} profit (15% growth)`,
          ],
        }
      },
      dynamicReturns() {
        // Calculate ROI metrics from actual financial data
        const totalInvestment = startupData.startupSummary.totalInvestment
        const year1Profit = financialData.monthlyProjections.totalNetIncome
        const year1Revenue = financialData.monthlyProjections.totalYearlyRevenue

        // Calculate Annual ROI: (Net Income / Total Investment) * 100
        const annualROI = ((year1Profit / totalInvestment) * 100).toFixed(1)

        // Calculate Profit Margin: (Net Income / Revenue) * 100
        const profitMargin = ((year1Profit / year1Revenue) * 100).toFixed(1)

        // Calculate Payback Period in months (Total Investment / Monthly Average Profit)
        const monthlyAverageProfit = year1Profit / 12
        const paybackMonths = Math.round(totalInvestment / monthlyAverageProfit)

        return {
          title: 'Return on Investment',
          items: [
            `Annual ROI: ${annualROI}% (Year 1)`,
            `Payback Period: ${paybackMonths} months`,
            `Profit Margin: ${profitMargin}%`,
          ],
        }
      },
      dynamicFinancialHighlights() {
        // Calculate financial highlights from actual data
        const totalInvestment = startupData.startupSummary.totalInvestment
        const monthlyRevenue = financialData.monthlyProjections.revenue
        const monthlyProfit = financialData.monthlyProjections.netOperatingIncome

        // Calculate average monthly revenue (excluding first month startup costs)
        const avgMonthlyRevenue = Math.round(
          monthlyRevenue.slice(1).reduce((sum, val) => sum + val, 0) / 11
        )

        // Calculate average monthly profit excluding startup costs
        const yearlyNetIncome = financialData.monthlyProjections.totalNetIncome
        const startupCosts = startupData.startupSummary.startupCosts
        const adjustedNetIncome = yearlyNetIncome + startupCosts // Add back startup costs that were subtracted in first month
        const avgMonthlyProfit = Math.round(adjustedNetIncome / 12)

        // Find break-even month (first month with positive profit)
        const breakEvenMonth = monthlyProfit.findIndex((profit) => profit > 0) + 1

        return {
          metrics: {
            startupInvestment: {
              label: 'Initial Investment',
              value: `$${totalInvestment.toLocaleString()}`,
              description: 'Total startup capital required',
            },
            monthlyRevenue: {
              label: 'Monthly Revenue',
              value: `$${avgMonthlyRevenue.toLocaleString()}`,
              description: 'Average monthly income',
            },
            monthlyProfit: {
              label: 'Monthly Profit',
              value: `$${avgMonthlyProfit.toLocaleString()}`,
              description: 'Average monthly profit margin',
            },
            breakEven: {
              label: 'Break-Even Point',
              value: `Month ${breakEvenMonth}`,
              description: 'When business becomes profitable',
            },
          },
        }
      },
    },
  }
</script>
