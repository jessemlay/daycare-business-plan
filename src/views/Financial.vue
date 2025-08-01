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
                        <th>Age Group</th>
                        <th>Rate</th>
                        <th>Expected Monthly Hours</th>
                        <th>Monthly Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Registered Hourly Care</td>
                        <td>6-18 months</td>
                        <td>$16/hour</td>
                        <td>300 hours</td>
                        <td class="text-success fw-bold">$4,800</td>
                      </tr>
                      <tr>
                        <td>Registered Hourly Care</td>
                        <td>8 months-12 years</td>
                        <td>$14/hour</td>
                        <td>400 hours</td>
                        <td class="text-success fw-bold">$5,600</td>
                      </tr>
                      <tr>
                        <td>Drop-In Care (Non-Registered)</td>
                        <td>6-18 months</td>
                        <td>$18/hour</td>
                        <td>80 hours</td>
                        <td class="text-success fw-bold">$1,440</td>
                      </tr>
                      <tr>
                        <td>Drop-In Care (Non-Registered)</td>
                        <td>8 months-12 years</td>
                        <td>$16/hour</td>
                        <td>60 hours</td>
                        <td class="text-success fw-bold">$960</td>
                      </tr>
                      <tr>
                        <td>Additional Children (Registered)</td>
                        <td>All ages</td>
                        <td>$8/hour</td>
                        <td>150 hours</td>
                        <td class="text-success fw-bold">$1,200</td>
                      </tr>
                      <tr>
                        <td>Monthly Block Plans</td>
                        <td>All ages</td>
                        <td>Variable</td>
                        <td>-</td>
                        <td class="text-success fw-bold">$1,800</td>
                      </tr>
                      <tr>
                        <td>Annual Registration Fees</td>
                        <td>All ages</td>
                        <td>$40/year</td>
                        <td>10 registrations/month</td>
                        <td class="text-success fw-bold">$400</td>
                      </tr>
                    </tbody>
                    <tfoot class="table-success">
                      <tr>
                        <th colspan="4">Total Monthly Revenue</th>
                        <th class="text-success">$16,200</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pricing Structure Details -->
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-tags me-2"></i>Registered vs Drop-In Pricing</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead class="table-info">
                      <tr>
                        <th>Age Group</th>
                        <th>Registered Rate</th>
                        <th>Drop-In Rate</th>
                        <th>Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>6-18 months</td>
                        <td class="text-success fw-bold">$16/hr</td>
                        <td class="text-danger">$18/hr</td>
                        <td class="text-success">$2/hr (11%)</td>
                      </tr>
                      <tr>
                        <td>8 months-12 years</td>
                        <td class="text-success fw-bold">$14/hr</td>
                        <td class="text-danger">$16/hr</td>
                        <td class="text-success">$2/hr (13%)</td>
                      </tr>
                      <tr>
                        <td>Additional Children</td>
                        <td class="text-success fw-bold">$8/hr</td>
                        <td class="text-danger">No discount</td>
                        <td class="text-success">Up to 50%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="alert alert-info mt-3">
                  <small
                    ><strong>Note:</strong> $40 annual registration fee applies to registered
                    families</small
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-piggy-bank me-2"></i>Monthly Block Plans</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead class="table-success">
                      <tr>
                        <th>Plan</th>
                        <th>Purchase</th>
                        <th>Credit Received</th>
                        <th>Bonus Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Small Block</td>
                        <td>$300</td>
                        <td class="text-success fw-bold">$345</td>
                        <td class="text-success">$45 (15%)</td>
                      </tr>
                      <tr>
                        <td>Large Block</td>
                        <td>$500</td>
                        <td class="text-success fw-bold">$600</td>
                        <td class="text-success">$100 (20%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="alert alert-success mt-3">
                  <small
                    ><strong>Block Plans:</strong> Available only to registered families, using
                    member rates</small
                  >
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

        <!-- New Charts: Pricing Comparison and Block Plan Savings -->
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-cash-coin me-2"></i>Pricing Comparison</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="pricingChartData"
                  :chartOptions="chartOptions"
                  chartType="bar"
                  chartId="pricing-chart"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-gift me-2"></i>Block Plan Savings</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="blockPlanChartData"
                  :chartOptions="chartOptions"
                  chartType="bar"
                  chartId="block-plan-chart"
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
    pricingComparisonData,
    blockPlanSavingsData,
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
        pricingChartData: pricingComparisonData,
        blockPlanChartData: blockPlanSavingsData,
      }
    },
  }
</script>
