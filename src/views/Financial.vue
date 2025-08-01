<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-calculator me-2"></i>Financial Projections</h5>
      </div>
      <div class="card-body">
        <div class="row mb-4">
          <div class="col-md-4">
            <div class="card border-primary">
              <div class="card-body text-center">
                <h4 class="text-primary">Revenue</h4>
                <p class="h5">Year 1 Projections</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-warning">
              <div class="card-body text-center">
                <h4 class="text-warning">Expenses</h4>
                <p class="h5">Operational Costs</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-success">
              <div class="card-body text-center">
                <h4 class="text-success">Profit</h4>
                <p class="h5">Net Income</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Data Integration -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-graph-up me-2"></i>Revenue Projections</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead class="table-primary">
                      <tr>
                        <th>Service Type</th>
                        <th>Rate</th>
                        <th>Expected Monthly Usage</th>
                        <th>Monthly Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Full Day Care (8+ hours)</td>
                        <td>$45/day</td>
                        <td>150 days</td>
                        <td class="text-success fw-bold">$6,750</td>
                      </tr>
                      <tr>
                        <td>Half Day Care (4-8 hours)</td>
                        <td>$30/day</td>
                        <td>100 days</td>
                        <td class="text-success fw-bold">$3,000</td>
                      </tr>
                      <tr>
                        <td>Hourly Care (2-4 hours)</td>
                        <td>$12/hour</td>
                        <td>200 hours</td>
                        <td class="text-success fw-bold">$2,400</td>
                      </tr>
                      <tr>
                        <td>Emergency/Drop-in Care</td>
                        <td>$15/hour</td>
                        <td>80 hours</td>
                        <td class="text-success fw-bold">$1,200</td>
                      </tr>
                    </tbody>
                    <tfoot class="table-success">
                      <tr>
                        <th colspan="3">Total Monthly Revenue</th>
                        <th class="text-success">$13,350</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Operating Expenses -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-cash-stack me-2"></i>Monthly Operating Expenses</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="table-responsive">
                      <table class="table table-sm">
                        <thead class="table-warning">
                          <tr>
                            <th>Fixed Costs</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Rent/Lease</td>
                            <td class="text-warning fw-bold">$2,500</td>
                          </tr>
                          <tr>
                            <td>Insurance</td>
                            <td class="text-warning fw-bold">$450</td>
                          </tr>
                          <tr>
                            <td>Utilities</td>
                            <td class="text-warning fw-bold">$300</td>
                          </tr>
                          <tr>
                            <td>License/Permits</td>
                            <td class="text-warning fw-bold">$200</td>
                          </tr>
                          <tr>
                            <td>Equipment Lease</td>
                            <td class="text-warning fw-bold">$150</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="table-responsive">
                      <table class="table table-sm">
                        <thead class="table-warning">
                          <tr>
                            <th>Variable Costs</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Staff Wages</td>
                            <td class="text-warning fw-bold">$4,800</td>
                          </tr>
                          <tr>
                            <td>Supplies & Materials</td>
                            <td class="text-warning fw-bold">$400</td>
                          </tr>
                          <tr>
                            <td>Food/Snacks</td>
                            <td class="text-warning fw-bold">$600</td>
                          </tr>
                          <tr>
                            <td>Marketing</td>
                            <td class="text-warning fw-bold">$300</td>
                          </tr>
                          <tr>
                            <td>Miscellaneous</td>
                            <td class="text-warning fw-bold">$200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-12">
                    <div class="alert alert-warning">
                      <strong>Total Monthly Expenses: $9,900</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Profit Analysis -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card border-success">
              <div class="card-header bg-success text-white">
                <h6><i class="bi bi-calculator me-2"></i>Profit Analysis</h6>
              </div>
              <div class="card-body">
                <div class="row text-center">
                  <div class="col-md-4">
                    <div class="card bg-light">
                      <div class="card-body">
                        <h4 class="text-success">$13,350</h4>
                        <p class="mb-0">Monthly Revenue</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card bg-light">
                      <div class="card-body">
                        <h4 class="text-warning">$9,900</h4>
                        <p class="mb-0">Monthly Expenses</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card bg-success text-white">
                      <div class="card-body">
                        <h4>$3,450</h4>
                        <p class="mb-0">Net Monthly Profit</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <h6 class="card-title">Annual Projections</h6>
                        <ul class="list-unstyled">
                          <li>
                            <strong>Annual Revenue:</strong>
                            <span class="text-success">$160,200</span>
                          </li>
                          <li>
                            <strong>Annual Expenses:</strong>
                            <span class="text-warning">$118,800</span>
                          </li>
                          <li>
                            <strong>Annual Net Profit:</strong>
                            <span class="text-success">$41,400</span>
                          </li>
                          <li>
                            <strong>Profit Margin:</strong> <span class="text-success">25.8%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <h6 class="card-title">Break-Even Analysis</h6>
                        <ul class="list-unstyled">
                          <li>
                            <strong>Break-Even Point:</strong>
                            <span class="text-info">Month 3</span>
                          </li>
                          <li>
                            <strong>ROI Timeline:</strong>
                            <span class="text-info">12-18 months</span>
                          </li>
                          <li>
                            <strong>Growth Target:</strong>
                            <span class="text-info">15% annually</span>
                          </li>
                          <li>
                            <strong>Market Share Goal:</strong>
                            <span class="text-info">5% local market</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Charts -->
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-bar-chart me-2"></i>Revenue Breakdown</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="revenueChartData"
                  :chartOptions="chartOptions"
                  chartType="doughnut"
                  chartId="revenue-chart"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-graph-up me-2"></i>Monthly Projections</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="monthlyChartData"
                  :chartOptions="chartOptions"
                  chartType="line"
                  chartId="monthly-chart"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Expense Breakdown Chart -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-pie-chart me-2"></i>Expense Breakdown</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="expenseChartData"
                  :chartOptions="chartOptions"
                  chartType="bar"
                  chartId="expense-chart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FinancialChart from '@/components/FinancialChart.vue'
  import {
    revenueBreakdownData,
    monthlyProjectionsData,
    expenseBreakdownData,
  } from '@/data/financialData.js'

  export default {
    name: 'FinancialPage',
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
        revenueChartData: revenueBreakdownData,
        monthlyChartData: monthlyProjectionsData,
        expenseChartData: expenseBreakdownData,
      }
    },
  }
</script>
