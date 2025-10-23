<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-calculator me-2"></i>Financial Projections</h5>

        <!-- Tab Navigation -->
        <ul class="nav nav-tabs mt-3" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeExpenseTab === 'year1' }"
              @click="activeExpenseTab = 'year1'"
              type="button"
              role="tab"
            >
              Year 1
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeExpenseTab === 'year2' }"
              @click="activeExpenseTab = 'year2'"
              type="button"
              role="tab"
            >
              Year 2
            </button>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="row mb-4">
          <div class="col-md-4">
            <div class="card border-primary">
              <div class="card-body text-center">
                <h4 class="text-primary">Revenue</h4>
                <p class="h5">${{ currentYearRevenue.toLocaleString() }}</p>
                <small class="text-muted">{{ currentYearLabel }} Total</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-warning">
              <div class="card-body text-center">
                <h4 class="text-warning">Expenses</h4>
                <p class="h5">${{ currentYearExpenses.toLocaleString() }}</p>
                <small class="text-muted">{{ currentYearLabel }} Total</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-success">
              <div class="card-body text-center">
                <h4 class="text-success">Net Income</h4>
                <p class="h5">${{ currentYearNetIncome.toLocaleString() }}</p>
                <small class="text-muted">{{ currentYearLabel }} Profit</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Data Integration -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-graph-up me-2"></i>12-Month Revenue Projections</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-striped table-hover">
                    <thead class="table-primary">
                      <tr>
                        <th>Month</th>
                        <th>Kids/Day</th>
                        <th>Teachers & Ratios (Capacity)</th>
                        <th>Registered Kids</th>
                        <th>Non-Reg Kids</th>
                        <th>Registration Fees</th>
                        <th>Monthly Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(month, index) in monthNames" :key="index">
                        <td>
                          <strong>{{ month }}</strong>
                        </td>
                        <td>{{ currentYearData.kidsPerDay[index] }}</td>
                        <td>{{ getTeacherRatioDisplay(index) }}</td>
                        <td>{{ currentYearData.registeredKids[index] }}</td>
                        <td>{{ currentYearData.nonRegisteredKids[index] }}</td>
                        <td
                          :class="
                            currentYearData.registrationFees[index] > 0 ? 'text-info' : 'text-muted'
                          "
                        >
                          ${{ currentYearData.registrationFees[index] }}
                        </td>
                        <td class="text-success fw-bold">
                          ${{ formatNumber(currentYearData.revenue[index]) }}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot class="table-success">
                      <tr>
                        <th colspan="6">
                          Total {{ activeExpenseTab === 'year2' ? 'Year 2' : 'Year 1' }} Revenue
                        </th>
                        <th class="text-success">
                          ${{ currentYearData.totalYearlyRevenue.toLocaleString() }}
                        </th>
                      </tr>
                      <tr>
                        <th colspan="6">Average Monthly Revenue</th>
                        <th class="text-success">
                          ${{
                            Math.round(currentYearData.totalYearlyRevenue / 12).toLocaleString()
                          }}
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div class="mt-3">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="card border-info">
                        <div class="card-body">
                          <h6 class="card-title text-info">Growth Highlights</h6>
                          <ul class="list-unstyled mb-0">
                            <li>
                              <i class="bi bi-arrow-up-circle text-success me-2"></i
                              >{{
                                Math.round(
                                  ((financialData.monthlyProjections.revenue[11] -
                                    financialData.monthlyProjections.revenue[0]) /
                                    financialData.monthlyProjections.revenue[0]) *
                                    100
                                )
                              }}% growth from Month 1 to Month 12
                            </li>
                            <li>
                              <i class="bi bi-people text-primary me-2"></i
                              >{{ financialData.monthlyProjections.kidsPerDay[0] }} →
                              {{ financialData.monthlyProjections.kidsPerDay[11] }} kids per day
                              (capacity scale)
                            </li>
                            <li>
                              <i class="bi bi-person-badge text-warning me-2"></i
                              >{{ financialData.monthlyProjections.teachers[0] }} →
                              {{ financialData.monthlyProjections.teachers[11] }} teachers ({{
                                financialData.monthlyProjections.capacity[0]
                              }}
                              → {{ financialData.monthlyProjections.capacity[11] }} capacity)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card border-warning">
                        <div class="card-body">
                          <h6 class="card-title text-warning">Registration Revenue</h6>
                          <ul class="list-unstyled mb-0">
                            <li>
                              <i class="bi bi-cash text-success me-2"></i>Total Registration Fees:
                              ${{
                                financialData.monthlyProjections.registrationFees
                                  .reduce((sum, fee) => sum + fee, 0)
                                  .toLocaleString()
                              }}
                            </li>
                            <li>
                              <i class="bi bi-calendar text-info me-2"></i>Peak registration:
                              January (${{
                                Math.max(...financialData.monthlyProjections.registrationFees)
                              }})
                            </li>
                            <li>
                              <i class="bi bi-graph-up text-primary me-2"></i>Ongoing monthly: ${{
                                Math.min(
                                  ...financialData.monthlyProjections.registrationFees.filter(
                                    (fee) => fee > 0
                                  )
                                )
                              }}-${{
                                Math.max(
                                  ...financialData.monthlyProjections.registrationFees.slice(1)
                                )
                              }}
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
        </div>

        <!-- Operating Expenses -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-cash-stack me-2"></i>Monthly Operating Expenses Breakdown</h6>
                <small class="text-muted">Year-over-Year Analysis</small>
              </div>
              <div class="card-body">
                <!-- Tab Content -->
                <div class="tab-content">
                  <!-- Single tab that updates based on year selection -->
                  <div>
                    <!-- Current tab = {{ activeExpenseTab }} -->
                    <!-- Expense Summary Cards -->
                    <div class="row mb-4">
                      <div class="col-md-4">
                        <div class="card bg-warning text-white">
                          <div class="card-body text-center">
                            <h4>
                              ${{
                                formatNumber(
                                  activeExpenseTab === 'year1'
                                    ? financialData.expenseBreakdown.totalOperatingExpenses.yearly -
                                        startupData.startupSummary.startupCosts
                                    : getYear2ExpenseCategories().reduce(
                                        (sum, cat) => sum + cat.yearly.value,
                                        0
                                      )
                                )
                              }}
                            </h4>
                            <p class="mb-0">Total Operating Expenses</p>
                            <small
                              >{{
                                activeExpenseTab === 'year1'
                                  ? calculateExpensePercentage(
                                      financialData.expenseBreakdown.totalOperatingExpenses.yearly -
                                        startupData.startupSummary.startupCosts
                                    )
                                  : calculateYear2ExpensePercentage(
                                      getYear2ExpenseCategories().reduce(
                                        (sum, cat) => sum + cat.yearly.value,
                                        0
                                      )
                                    )
                              }}
                              of Revenue</small
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="card bg-info text-white">
                          <div class="card-body text-center">
                            <h4>
                              ${{
                                formatNumber(
                                  Math.round(
                                    (financialData.expenseBreakdown.totalOperatingExpenses.yearly -
                                      startupData.startupSummary.startupCosts) /
                                      12
                                  )
                                )
                              }}
                            </h4>
                            <p class="mb-0">Average Monthly Expenses</p>
                            <small
                              >Growing from ${{
                                Math.min(
                                  ...financialData.monthlyProjections.expenses.slice(1)
                                ).toLocaleString()
                              }}
                              to ${{
                                Math.max(
                                  ...financialData.monthlyProjections.expenses.slice(1)
                                ).toLocaleString()
                              }}</small
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="card bg-success text-white">
                          <div class="card-body text-center">
                            <h4>
                              ${{ formatNumber(financialData.monthlyProjections.totalNetIncome) }}
                            </h4>
                            <p class="mb-0">Net Operating Income</p>
                            <small
                              >{{
                                Math.round(
                                  (financialData.monthlyProjections.totalNetIncome /
                                    financialData.monthlyProjections.totalYearlyRevenue) *
                                    100
                                )
                              }}% Profit Margin</small
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Detailed Monthly Table -->
                    <div class="table-responsive">
                      <!-- Financial Grid Component -->
                      <FinancialGrid
                        :categories="getCurrentExpenseCategories()"
                        :total-expenses="getCurrentMonthlyExpenses()"
                        :total-yearly-expense="getCurrentYearlyTotalExpense()"
                        :total-percentage="getCurrentTotalPercentage()"
                        :monthly-revenue="getCurrentMonthlyRevenue()"
                        :total-yearly-revenue="getCurrentYearlyRevenue()"
                        :monthly-profit="getCurrentMonthlyProfit()"
                        :total-yearly-profit="getCurrentYearlyProfit()"
                        :contingency-balances="getCurrentContingencyBalances()"
                        :final-contingency-balance="getCurrentFinalContingencyBalance()"
                        :show-contingency-row="true"
                      ></FinancialGrid>
                    </div>

                    <!-- Expense Category Analysis -->
                    <div class="row mt-4">
                      <div class="col-md-6">
                        <div class="card border-primary">
                          <div class="card-header">
                            <h6 class="mb-0">Largest Expense Categories</h6>
                          </div>
                          <div class="card-body">
                            <div class="list-group list-group-flush">
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Wages & Salaries</strong>
                                  <br /><small class="text-muted"
                                    >Growing staff from 2 to 5 teachers</small
                                  >
                                </div>
                                <span class="badge bg-primary rounded-pill">{{
                                  calculateExpensePercentage(
                                    financialData.expenseBreakdown.wages.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Rent</strong>
                                  <br /><small class="text-muted"
                                    >Fixed monthly facility cost</small
                                  >
                                </div>
                                <span class="badge bg-warning rounded-pill">{{
                                  calculateExpensePercentage(
                                    financialData.expenseBreakdown.rent.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Facility Setup</strong>
                                  <br /><small class="text-muted"
                                    >Major startup investment in Month 1</small
                                  >
                                </div>
                                <span class="badge bg-info rounded-pill">{{
                                  calculateExpensePercentage(
                                    financialData.expenseBreakdown.facilitySetup.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Loan Payment</strong>
                                  <br /><small class="text-muted"
                                    >Monthly business loan payments</small
                                  >
                                </div>
                                <span class="badge bg-secondary rounded-pill">{{
                                  calculateExpensePercentage(
                                    financialData.expenseBreakdown.loanPayment.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Payroll Taxes</strong>
                                  <br /><small class="text-muted"
                                    >Employer taxes on staff wages</small
                                  >
                                </div>
                                <span class="badge bg-dark rounded-pill">{{
                                  calculateExpensePercentage(
                                    financialData.expenseBreakdown.payrollTaxes.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Accounting and Legal</strong>
                                  <br /><small class="text-muted"
                                    >Professional services and compliance</small
                                  >
                                </div>
                                <span class="badge bg-success rounded-pill">{{
                                  calculateExpensePercentage(
                                    financialData.expenseBreakdown.accountingLegal.yearly
                                  )
                                }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="card border-success">
                          <div class="card-header">
                            <h6 class="mb-0">Quarterly Profit Analysis</h6>
                          </div>
                          <div class="card-body">
                            <div
                              v-for="(quarter, index) in getQuarterlyData()"
                              :key="index"
                              class="mb-3"
                            >
                              <div class="d-flex justify-content-between align-items-center">
                                <span class="fw-bold">{{ quarter.quarter }}:</span>
                                <div class="text-end">
                                  <div class="small text-muted">
                                    Revenue: ${{ formatNumber(quarter.revenue) }}
                                  </div>
                                  <div class="small text-muted">
                                    Total Expenses: ${{ formatNumber(quarter.expenses) }}
                                  </div>
                                  <strong
                                    :class="quarter.profit >= 0 ? 'text-success' : 'text-danger'"
                                  >
                                    {{ quarter.profit >= 0 ? 'Net Profit' : 'Net Loss' }}: ${{
                                      formatNumber(Math.abs(quarter.profit))
                                    }}
                                  </strong>
                                </div>
                              </div>
                              <div class="progress mb-2" style="height: 8px">
                                <div
                                  class="progress-bar"
                                  :class="quarter.profit >= 0 ? 'bg-success' : 'bg-danger'"
                                  :style="`width: ${(Math.abs(quarter.profit) / Math.max(...getQuarterlyData().map((q) => Math.abs(q.profit)))) * 100}%`"
                                ></div>
                              </div>
                            </div>
                            <hr />
                            <div class="text-center">
                              <small class="text-muted">
                                Q1 loss due to startup costs, profitable from Q2 onwards<br />
                                Strong growth: Q4 profit 4.6× higher than Q2
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- No closing div here as we now have a single tab -->
                    <div class="row mb-4">
                      <div class="col-md-4">
                        <div class="card bg-warning text-white">
                          <div class="card-body text-center">
                            <h4>
                              ${{
                                formatNumber(
                                  getYear2ExpenseCategories().reduce(
                                    (sum, cat) => sum + cat.yearly,
                                    0
                                  )
                                )
                              }}
                            </h4>
                            <p class="mb-0">Total Operating Expenses</p>
                            <small>Year 2 Projection</small>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="card bg-info text-white">
                          <div class="card-body text-center">
                            <h4>
                              ${{
                                formatNumber(
                                  Math.round(
                                    getYear2ExpenseCategories().reduce(
                                      (sum, cat) => sum + cat.yearly,
                                      0
                                    ) / 12
                                  )
                                )
                              }}
                            </h4>
                            <p class="mb-0">Average Monthly Expenses</p>
                            <small
                              >Consistent ${{
                                formatNumber(getTotalExpensesMonthly()[11])
                              }}/month</small
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="card bg-success text-white">
                          <div class="card-body text-center">
                            <h4>${{ formatNumber(getYear2TotalYearlyTakeHome()) }}</h4>
                            <p class="mb-0">Net Operating Income</p>
                            <small>Year 2 Projected Profit</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Empty space where Year 2 table was removed -->
                    <div v-if="activeExpenseTab === 'year2'" class="text-muted text-center my-3">
                      <small>Year 2 expense details are displayed above.</small>
                    </div>

                    <!-- Expense Category Analysis - Conditionally show Year 1 or Year 2 -->
                    <div v-if="activeExpenseTab === 'year2'" class="row mt-4">
                      <div class="col-md-6">
                        <div class="card border-primary">
                          <div class="card-header">
                            <h6 class="mb-0">Largest Expense Categories - Year 2</h6>
                          </div>
                          <div class="card-body">
                            <div class="list-group list-group-flush">
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Wages & Salaries</strong>
                                  <br /><small class="text-muted"
                                    >Stable staffing at full capacity</small
                                  >
                                </div>
                                <span class="badge bg-primary rounded-pill">{{
                                  calculateYear2ExpensePercentage(
                                    financialData.year2ExpenseBreakdown.wages.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Rent & Lease</strong>
                                  <br /><small class="text-muted"
                                    >Consistent monthly lease payments</small
                                  >
                                </div>
                                <span class="badge bg-info rounded-pill">{{
                                  calculateYear2ExpensePercentage(
                                    financialData.year2ExpenseBreakdown.rent.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Loan Payment</strong>
                                  <br /><small class="text-muted"
                                    >Fixed monthly loan obligations</small
                                  >
                                </div>
                                <span class="badge bg-warning rounded-pill">{{
                                  calculateYear2ExpensePercentage(
                                    financialData.year2ExpenseBreakdown.loanPayment.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Accounting & Legal</strong>
                                  <br /><small class="text-muted"
                                    >Professional services and compliance</small
                                  >
                                </div>
                                <span class="badge bg-secondary rounded-pill">{{
                                  calculateYear2ExpensePercentage(
                                    financialData.year2ExpenseBreakdown.accountingLegal.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Payroll Taxes</strong>
                                  <br /><small class="text-muted"
                                    >Employer taxes on staff wages</small
                                  >
                                </div>
                                <span class="badge bg-dark rounded-pill">{{
                                  calculateYear2ExpensePercentage(
                                    financialData.year2ExpenseBreakdown.payrollTaxes.yearly
                                  )
                                }}</span>
                              </div>
                              <div
                                class="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Insurance</strong>
                                  <br /><small class="text-muted"
                                    >Ongoing liability and property coverage</small
                                  >
                                </div>
                                <span class="badge bg-success rounded-pill">{{
                                  calculateYear2ExpensePercentage(
                                    financialData.year2ExpenseBreakdown.insurance.yearly
                                  )
                                }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="card border-success">
                          <div class="card-header">
                            <h6 class="mb-0">Quarterly Profit Analysis</h6>
                          </div>
                          <div class="card-body">
                            <div
                              v-for="(quarter, index) in getYear2QuarterlyData()"
                              :key="index"
                              class="mb-3"
                            >
                              <div class="d-flex justify-content-between align-items-center">
                                <span class="fw-bold">{{ quarter.quarter }}:</span>
                                <div class="text-end">
                                  <div class="small text-muted">
                                    Revenue: ${{ formatNumber(quarter.revenue) }}
                                  </div>
                                  <div class="small text-muted">
                                    Total Expenses: ${{ formatNumber(quarter.expenses) }}
                                  </div>
                                  <strong
                                    :class="quarter.profit >= 0 ? 'text-success' : 'text-danger'"
                                  >
                                    {{ quarter.profit >= 0 ? 'Net Profit' : 'Net Loss' }}: ${{
                                      formatNumber(Math.abs(quarter.profit))
                                    }}
                                  </strong>
                                </div>
                              </div>
                              <div class="progress mb-2" style="height: 8px">
                                <div
                                  class="progress-bar"
                                  :class="quarter.profit >= 0 ? 'bg-success' : 'bg-danger'"
                                  :style="{ width: quarter.profitMargin + '%' }"
                                ></div>
                              </div>
                              <small class="text-muted">
                                Profit Margin: {{ quarter.profitMargin.toFixed(1) }}%
                              </small>
                            </div>
                          </div>
                        </div>
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
          <div class="col-md-12">
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

        <!-- Cash Flow Analysis Chart -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-graph-up-arrow me-2"></i>Cash Flow Analysis</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="cashFlowChartData"
                  :chartOptions="chartOptions"
                  chartType="line"
                  chartId="cash-flow-chart"
                />
                <div class="mt-3">
                  <p class="text-muted small">
                    <strong>Break-Even Analysis:</strong> The business is projected to reach
                    break-even in April (Month 4), transitioning from initial losses due to setup
                    costs to consistent profitability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Capacity and Staffing Growth Chart -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-people me-2"></i>Capacity & Staffing Growth</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="capacityChartData"
                  :chartOptions="capacityChartOptions"
                  chartType="line"
                  chartId="capacity-chart"
                />
                <div class="mt-3">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="text-center">
                        <h5 class="text-success">
                          {{
                            Math.round(
                              ((financialData.monthlyProjections.kidsPerDay[11] -
                                financialData.monthlyProjections.kidsPerDay[0]) /
                                financialData.monthlyProjections.kidsPerDay[0]) *
                                100
                            )
                          }}%
                        </h5>
                        <small class="text-muted">Growth in Daily Kids</small>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-center">
                        <h5 class="text-warning">
                          {{
                            Math.round(
                              ((financialData.monthlyProjections.capacity[11] -
                                financialData.monthlyProjections.capacity[0]) /
                                financialData.monthlyProjections.capacity[0]) *
                                100
                            )
                          }}%
                        </h5>
                        <small class="text-muted">Capacity Increase</small>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="text-center">
                        <h5 class="text-danger">
                          {{
                            Math.round(
                              ((financialData.monthlyProjections.teachers[11] -
                                financialData.monthlyProjections.teachers[0]) /
                                financialData.monthlyProjections.teachers[0]) *
                                100
                            )
                          }}%
                        </h5>
                        <small class="text-muted">Staff Growth</small>
                      </div>
                    </div>
                  </div>
                </div>
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
  import FinancialGrid from '@/components/FinancialGrid.vue'
  import financialData from '@/data/financialData.json'
  import startupData from '@/data/startupData.json'

  export default {
    name: 'FinancialPage',
    components: {
      FinancialChart,
      FinancialGrid,
    },
    data() {
      return {
        financialData: financialData,
        startupData: startupData,
        activeExpenseTab: 'year1',
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
        capacityChartOptions: {
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
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Kids/Capacity',
              },
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'Teachers',
              },
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        },
      }
    },
    computed: {
      // Properties that switch based on selected year
      currentYearFinancials() {
        return this.activeExpenseTab === 'year2'
          ? {
              revenue: this.financialData.year2Projections.revenue,
              totalExpensesMonthly: this.getYear2TotalExpensesMonthly(),
              expenseCategories: this.getYear2ExpenseCategories(),
              monthlyTakeHome: this.getYear2MonthlyTakeHome(),
              totalYearlyTakeHome: this.getYear2TotalYearlyTakeHome(),
              totalYearlyRevenue: this.financialData.year2Projections.totalYearlyRevenue,
              kidsPerDay: this.financialData.year2Projections.kidsPerDay,
              registeredKids: this.financialData.year2Projections.registeredKids,
              nonRegisteredKids: this.financialData.year2Projections.nonRegisteredKids,
              capacity: this.financialData.year2Projections.capacity,
              teachers: this.financialData.year2Projections.teachers,
              loanBalance: this.financialData.year2Projections.loanBalance,
              registrationFees: this.financialData.year2Projections.registrationFees,
            }
          : {
              revenue: this.financialData.monthlyProjections.revenue,
              totalExpensesMonthly: this.getTotalExpensesMonthly(),
              expenseCategories: this.getExpenseCategories(),
              monthlyTakeHome: this.getMonthlyTakeHome(),
              totalYearlyTakeHome: this.getTotalYearlyTakeHome(),
              totalYearlyRevenue: this.financialData.monthlyProjections.totalYearlyRevenue,
              kidsPerDay: this.financialData.monthlyProjections.kidsPerDay,
              registeredKids: this.financialData.monthlyProjections.registeredKids,
              nonRegisteredKids: this.financialData.monthlyProjections.nonRegisteredKids,
              capacity: this.financialData.monthlyProjections.capacity,
              teachers: this.financialData.monthlyProjections.teachers,
              loanBalance: this.financialData.monthlyProjections.loanBalance,
              registrationFees: this.financialData.monthlyProjections.registrationFees,
            }
      },

      monthlyChartData() {
        const isYear2 = this.activeExpenseTab === 'year2'
        const revenue = isYear2
          ? this.financialData.year2Projections.revenue
          : this.financialData.monthlyProjections.revenue
        const expenses = isYear2
          ? this.getYear2TotalExpensesMonthly().map((item) => item.value)
          : this.financialData.monthlyProjections.expenses
        const netIncome = isYear2
          ? this.getYear2MonthlyTakeHome()
          : this.financialData.monthlyProjections.netOperatingIncome

        return {
          labels: [
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
          ],
          datasets: [
            {
              label: 'Revenue ($)',
              data: revenue,
              borderColor: '#28a745',
              backgroundColor: 'rgba(40, 167, 69, 0.1)',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Expenses ($)',
              data: expenses,
              borderColor: '#dc3545',
              backgroundColor: 'rgba(220, 53, 69, 0.1)',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Net Income ($)',
              data: netIncome,
              borderColor: '#007bff',
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
              fill: true,
              tension: 0.4,
            },
          ],
        }
      },
      expenseChartData() {
        const isYear2 = this.activeExpenseTab === 'year2'
        const expenseData = isYear2
          ? this.financialData.year2ExpenseBreakdown
          : this.financialData.expenseBreakdown

        return {
          labels: [
            'Staff Wages',
            'Rent/Lease',
            'Facility Setup',
            'Payroll Taxes',
            'Accounting/Legal',
            'Insurance',
            'Utilities',
            'Food/Snacks',
            'Technology',
            'Miscellaneous',
          ],
          datasets: [
            {
              label: `Annual Expenses ($) - ${isYear2 ? 'Year 2' : 'Year 1'}`,
              data: [
                expenseData.wages.yearly,
                expenseData.rent.yearly,
                expenseData.facilitySetup.yearly,
                expenseData.payrollTaxes.yearly,
                expenseData.accountingLegal.yearly,
                expenseData.insurance.yearly,
                expenseData.utilities.yearly,
                expenseData.foodSnacks.yearly,
                expenseData.technology.yearly,
                expenseData.miscellaneous.yearly,
              ],
              backgroundColor: [
                '#dc3545',
                '#ffc107',
                '#fd7e14',
                '#6f42c1',
                '#20c997',
                '#0dcaf0',
                '#198754',
                '#e83e8c',
                '#6c757d',
                '#495057',
              ],
              borderColor: [
                '#bd2130',
                '#e0a800',
                '#dc6545',
                '#563d7c',
                '#1a9f7c',
                '#0bb5d1',
                '#146c43',
                '#d91a72',
                '#545b62',
                '#3a3f44',
              ],
              borderWidth: 2,
            },
          ],
        }
      },
      cashFlowChartData() {
        const isYear2 = this.activeExpenseTab === 'year2'
        const netIncome = isYear2
          ? this.getYear2MonthlyTakeHome()
          : this.financialData.monthlyProjections.netOperatingIncome

        return {
          labels: [
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
          ],
          datasets: [
            {
              label: `Operating Income ($) - ${isYear2 ? 'Year 2' : 'Year 1'}`,
              data: netIncome,
              borderColor: '#007bff',
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
              fill: true,
              tension: 0.4,
            },
            {
              label: 'Break-Even Line ($)',
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              borderColor: '#6c757d',
              borderDash: [5, 5],
              fill: false,
            },
          ],
        }
      },
      capacityChartData() {
        const isYear2 = this.activeExpenseTab === 'year2'
        const projections = isYear2
          ? this.financialData.year2Projections
          : this.financialData.monthlyProjections

        return {
          labels: [
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
          ],
          datasets: [
            {
              label: 'Kids per Day',
              data: projections.kidsPerDay,
              borderColor: '#28a745',
              backgroundColor: 'rgba(40, 167, 69, 0.2)',
              yAxisID: 'y',
              tension: 0.4,
            },
            {
              label: 'Total Capacity',
              data: projections.capacity,
              borderColor: '#ffc107',
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              yAxisID: 'y',
              tension: 0.4,
              borderDash: [5, 5],
            },
            {
              label: 'Number of Teachers',
              data: projections.teachers,
              borderColor: '#dc3545',
              backgroundColor: 'rgba(220, 53, 69, 0.2)',
              yAxisID: 'y1',
              tension: 0.4,
            },
          ],
        }
      },
      monthNames() {
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]
      },
      // Dynamic values for summary cards based on active tab
      currentYearRevenue() {
        return this.activeExpenseTab === 'year2'
          ? this.financialData.year2Projections.totalYearlyRevenue
          : this.financialData.monthlyProjections.totalYearlyRevenue
      },
      currentYearExpenses() {
        if (this.activeExpenseTab === 'year2') {
          // Use the total operating expenses for Year 2
          return this.financialData.year2ExpenseBreakdown.totalOperatingExpenses.yearly
        } else {
          return this.financialData.monthlyProjections.totalYearlyExpenses
        }
      },
      currentYearNetIncome() {
        if (this.activeExpenseTab === 'year2') {
          return this.getYear2TotalYearlyTakeHome()
        } else {
          // For Year 1, use the calculated take-home profit that matches the table total
          return this.getTotalYearlyTakeHome()
        }
      },
      currentYearData() {
        return this.activeExpenseTab === 'year2'
          ? this.financialData.year2Projections
          : this.financialData.monthlyProjections
      },
      currentYearLabel() {
        return this.activeExpenseTab === 'year2' ? 'Year 2' : 'Year 1'
      },
    },
    methods: {
      getTeacherRatioDisplay(index) {
        const currentData =
          this.activeExpenseTab === 'year2'
            ? this.financialData.year2Projections
            : this.financialData.monthlyProjections

        const teachers = currentData.teachers[index]
        const capacity = currentData.capacity[index]

        // Calculate how many teachers are for 1:8 ratio vs 1:12 ratio
        const teachers8to1 = Math.min(1, Math.ceil(currentData.kidsPerDay[index] / 8))
        const remaining = Math.max(0, teachers - teachers8to1)

        if (remaining === 0) {
          return `${teachers8to1}×(1:8) → ${capacity}`
        } else {
          return `${teachers8to1}×(1:8), ${remaining}×(1:12) → ${capacity}`
        }
      },
      getMonthlyTakeHome() {
        // Calculate monthly revenue minus monthly operating expenses
        return Array.from({ length: 12 }, (_, monthIndex) => {
          const monthlyRevenue = this.financialData.monthlyProjections.revenue[monthIndex].value
          const monthlyExpenses = this.getTotalExpensesMonthly()[monthIndex].value
          return {
            value: monthlyRevenue - monthlyExpenses,
            note: `Revenue ($${monthlyRevenue}) - Expenses ($${monthlyExpenses}) = Net profit/loss`,
          }
        })
      },
      getTotalYearlyTakeHome() {
        return this.getMonthlyTakeHome().reduce((sum, monthly) => sum + monthly.value, 0)
      },

      // Methods for the reusable FinancialGrid component
      getCurrentExpenseCategories() {
        return this.activeExpenseTab === 'year2'
          ? this.getYear2ExpenseCategories()
          : this.getTopExpenseCategories()
      },

      getCurrentMonthlyExpenses() {
        return this.activeExpenseTab === 'year2'
          ? this.getYear2TotalExpensesMonthly()
          : this.getTotalExpensesMonthly()
      },

      getCurrentYearlyTotalExpense() {
        return this.activeExpenseTab === 'year2'
          ? this.getYear2ExpenseCategories().reduce((sum, cat) => sum + cat.yearly.value, 0)
          : this.financialData.expenseBreakdown.totalOperatingExpenses.yearly
      },

      getCurrentTotalPercentage() {
        const expense = this.getCurrentYearlyTotalExpense()
        const revenue = this.getCurrentYearlyRevenue()
        return Math.round((expense / revenue) * 100)
      },

      getCurrentMonthlyRevenue() {
        // Get the raw revenue data based on active tab
        const rawRevenueData = this.activeExpenseTab === 'year2'
            ? this.financialData.year2Projections.revenue
            : this.financialData.monthlyProjections.revenue

        // Strip any notes to remove tooltips from monthly revenue
        return rawRevenueData.map((item) => {
          // If it's an object with value property, return just the value
          if (item && typeof item === 'object' && 'value' in item) {
            return item.value
          }
          // Otherwise return the item as is (likely a number)
          return item
        })
      },

      getCurrentYearlyRevenue() {
        return this.activeExpenseTab === 'year2'
          ? this.financialData.year2Projections.totalYearlyRevenue
          : this.financialData.monthlyProjections.totalYearlyRevenue
      },

      getCurrentMonthlyProfit() {
        // Get raw profit data based on active tab
        const rawProfitData = this.activeExpenseTab === 'year2'
            ? this.getYear2MonthlyTakeHome()
            : this.getMonthlyTakeHome()

        // Return profit data without notes to remove tooltips
        return rawProfitData.map((item) => {
          // Keep only the value, remove any note properties
          return {
            value: item.value,
          }
        })
      },

      getCurrentYearlyProfit() {
        return this.activeExpenseTab === 'year2'
          ? this.getYear2TotalYearlyTakeHome()
          : this.getTotalYearlyTakeHome()
      },

      getCurrentContingencyBalances() {
        // Defensive: always return an array of 12 numbers
        let balances = []
        if (
          this.activeExpenseTab === 'year2' &&
          this.financialData &&
          this.financialData.year2Projections &&
          Array.isArray(this.financialData.year2Projections.loanBalance) &&
          this.financialData.year2Projections.loanBalance.length === 12
        ) {
          balances = this.financialData.year2Projections.loanBalance
        } else if (
          this.financialData &&
          this.financialData.monthlyProjections &&
          Array.isArray(this.financialData.monthlyProjections.loanBalance) &&
          this.financialData.monthlyProjections.loanBalance.length === 12
        ) {
          balances = this.financialData.monthlyProjections.loanBalance
        } else {
          // Calculate from profits if not present
          const monthlyProfits = (typeof this.getMonthlyTakeHome === 'function' ? this.getMonthlyTakeHome() : []) || []
          const initialLoan = 80000
          let remainingBalance = initialLoan
          for (let i = 0; i < 12; i++) {
            let profit = 0
            if (monthlyProfits[i] && typeof monthlyProfits[i].value === 'number') {
              profit = monthlyProfits[i].value
            }
            remainingBalance -= profit
            balances.push(Math.max(0, remainingBalance))
          }
          // Store for future use if possible
          if (
            this.financialData &&
            this.financialData.monthlyProjections &&
            typeof this.$set === 'function'
          ) {
            this.$set(this.financialData.monthlyProjections, 'loanBalance', balances)
          }
        }
        // Always return an array of 12 numbers
        if (!Array.isArray(balances) || balances.length !== 12) {
          return Array(12).fill(0)
        }
        return balances
      },

      getCurrentFinalContingencyBalance() {
        const balances = this.getCurrentContingencyBalances()
        return balances && balances.length > 0 ? balances[balances.length - 1] : 0
      },
      getQuarterlyData() {
        const revenue = this.financialData.monthlyProjections.revenue
        const expenses = this.financialData.monthlyProjections.expenses

        return [
          {
            quarter: 'Q1 (Jan-Mar)',
            revenue: revenue[0] + revenue[1] + revenue[2],
            expenses: expenses[0] + expenses[1] + expenses[2],
            profit: null, // Will be calculated
          },
          {
            quarter: 'Q2 (Apr-Jun)',
            revenue: revenue[3] + revenue[4] + revenue[5],
            expenses: expenses[3] + expenses[4] + expenses[5],
            profit: null,
          },
          {
            quarter: 'Q3 (Jul-Sep)',
            revenue: revenue[6] + revenue[7] + revenue[8],
            expenses: expenses[6] + expenses[7] + expenses[8],
            profit: null,
          },
          {
            quarter: 'Q4 (Oct-Dec)',
            revenue: revenue[9] + revenue[10] + revenue[11],
            expenses: expenses[9] + expenses[10] + expenses[11],
            profit: null,
          },
        ].map((q) => {
          const profit = q.revenue - q.expenses
          const profitMargin = q.revenue > 0 ? (profit / q.revenue) * 100 : 0
          return {
            ...q,
            profit: profit,
            profitMargin: Math.max(0, Math.min(100, Math.abs(profitMargin))),
          }
        })
      },
      formatNumber(num) {
        return num.toLocaleString()
      },
      calculateExpensePercentage(yearlyExpense) {
        const percentage =
          (yearlyExpense / this.financialData.monthlyProjections.totalYearlyRevenue) * 100
        // If less than 1%, show one decimal place, otherwise round to whole number
        if (percentage < 1) {
          return percentage.toFixed(1) + '%'
        } else {
          return Math.round(percentage) + '%'
        }
      },
      getTopExpenseCategories() {
        const expenses = this.financialData.expenseBreakdown
        // Return all expense categories in order of importance
        return [
          {
            label: 'Wages & Salaries',
            monthly: expenses.wages.monthly,
            yearly: expenses.wages.yearly,
            percentage: this.calculateExpensePercentage(expenses.wages.yearly),
          },
          {
            label: 'Rent',
            monthly: expenses.rent.monthly,
            yearly: expenses.rent.yearly,
            percentage: this.calculateExpensePercentage(expenses.rent.yearly),
          },
          {
            label: 'Facility Setup',
            monthly: expenses.facilitySetup.monthly,
            yearly: expenses.facilitySetup.yearly,
            percentage: this.calculateExpensePercentage(expenses.facilitySetup.yearly),
          },
          {
            label: 'Loan Payment',
            monthly: expenses.loanPayment.monthly,
            yearly: expenses.loanPayment.yearly,
            percentage: this.calculateExpensePercentage(expenses.loanPayment.yearly),
          },
          {
            label: 'Payroll Taxes',
            monthly: expenses.payrollTaxes.monthly,
            yearly: expenses.payrollTaxes.yearly,
            percentage: this.calculateExpensePercentage(expenses.payrollTaxes.yearly),
          },
          {
            label: 'Accounting and Legal',
            monthly: expenses.accountingLegal.monthly,
            yearly: expenses.accountingLegal.yearly,
            percentage: this.calculateExpensePercentage(expenses.accountingLegal.yearly),
          },
          {
            label: 'Insurance',
            monthly: expenses.insurance.monthly,
            yearly: expenses.insurance.yearly,
            percentage: this.calculateExpensePercentage(expenses.insurance.yearly),
          },
          {
            label: 'Utilities',
            monthly: expenses.utilities.monthly,
            yearly: expenses.utilities.yearly,
            percentage: this.calculateExpensePercentage(expenses.utilities.yearly),
          },
          {
            label: 'Food/Snacks',
            monthly: expenses.foodSnacks.monthly,
            yearly: expenses.foodSnacks.yearly,
            percentage: this.calculateExpensePercentage(expenses.foodSnacks.yearly),
          },
          {
            label: 'Technology (POS, Cameras, etc.)',
            monthly: expenses.technology.monthly,
            yearly: expenses.technology.yearly,
            percentage: this.calculateExpensePercentage(expenses.technology.yearly),
          },
          {
            label: 'Bank Service Charges',
            monthly: expenses.bankServiceCharges.monthly,
            yearly: expenses.bankServiceCharges.yearly,
            percentage: this.calculateExpensePercentage(expenses.bankServiceCharges.yearly),
          },
          {
            label: 'Software (QuickBooks, etc.)',
            monthly: expenses.software.monthly,
            yearly: expenses.software.yearly,
            percentage: this.calculateExpensePercentage(expenses.software.yearly),
          },
          {
            label: 'Staff Training',
            monthly: expenses.staffTraining.monthly,
            yearly: expenses.staffTraining.yearly,
            percentage: this.calculateExpensePercentage(expenses.staffTraining.yearly),
          },
          {
            label: 'Permits and Licenses',
            monthly: expenses.permits.monthly,
            yearly: expenses.permits.yearly,
            percentage: this.calculateExpensePercentage(expenses.permits.yearly),
          },
          {
            label: 'Communications',
            monthly: expenses.communications.monthly,
            yearly: expenses.communications.yearly,
            percentage: this.calculateExpensePercentage(expenses.communications.yearly),
          },
          {
            label: 'Supplies',
            monthly: expenses.supplies.monthly,
            yearly: expenses.supplies.yearly,
            percentage: this.calculateExpensePercentage(expenses.supplies.yearly),
          },
          {
            label: 'Advertising',
            monthly: expenses.advertising.monthly,
            yearly: expenses.advertising.yearly,
            percentage: this.calculateExpensePercentage(expenses.advertising.yearly),
          },
          {
            label: 'Office Expenses',
            monthly: expenses.officeExpenses.monthly,
            yearly: expenses.officeExpenses.yearly,
            percentage: this.calculateExpensePercentage(expenses.officeExpenses.yearly),
          },
          {
            label: 'Dues and Subscriptions',
            monthly: expenses.duesSubscriptions.monthly,
            yearly: expenses.duesSubscriptions.yearly,
            percentage: this.calculateExpensePercentage(expenses.duesSubscriptions.yearly),
          },
          {
            label: 'Website',
            monthly: expenses.website.monthly,
            yearly: expenses.website.yearly,
            percentage: this.calculateExpensePercentage(expenses.website.yearly),
          },
          {
            label: 'Miscellaneous',
            monthly: expenses.miscellaneous.monthly,
            yearly: expenses.miscellaneous.yearly,
            percentage: this.calculateExpensePercentage(expenses.miscellaneous.yearly),
          },
        ]
      },
      getOtherExpensesMonthly() {
        const expenses = this.financialData.expenseBreakdown
        const otherCategories = [
          'insurance',
          'permits',
          'supplies',
          'advertising',
          'accountingLegal',
          'officeExpenses',
          'technology',
          'staffTraining',
          'miscellaneous',
          'bankServiceCharges',
          'communications',
          'duesSubscriptions',
          'website',
          'software',
          'taxes',
          'payrollTaxes',
        ]

        // Sum up monthly amounts for all other categories
        return Array.from({ length: 12 }, (_, monthIndex) => {
          return otherCategories.reduce((sum, category) => {
            return sum + (expenses[category]?.monthly[monthIndex] || 0)
          }, 0)
        })
      },
      getOtherExpensesTotal() {
        const expenses = this.financialData.expenseBreakdown
        const otherCategories = [
          'insurance',
          'permits',
          'supplies',
          'advertising',
          'accountingLegal',
          'officeExpenses',
          'technology',
          'staffTraining',
          'miscellaneous',
          'bankServiceCharges',
          'communications',
          'duesSubscriptions',
          'website',
          'software',
          'taxes',
          'payrollTaxes',
        ]

        return otherCategories.reduce((sum, category) => {
          return sum + (expenses[category]?.yearly || 0)
        }, 0)
      },
      getTotalExpensesMonthly() {
        // Use the pre-calculated total operating expenses directly from the data
        return this.financialData.expenseBreakdown.totalOperatingExpenses.monthly.map((expense) => {
          // Handle both formats: plain numbers or {value, note} objects
          if (typeof expense === 'object' && expense !== null) {
            return {
              value: expense.value || 0,
              note: expense.note || '',
            }
          } else {
            // If expense is a plain number
            return {
              value: expense || 0,
              note: '',
            }
          }
        })
      },
      getExpenseRowClass(percentage) {
        if (percentage >= 55) return 'table-danger' // Only extremely high percentages are red
        if (percentage >= 50) return 'table-warning' // High expenses are yellow
        if (percentage >= 48) return 'table-info' // Only higher moderate expenses are blue
        return '' // Normal expenses like wages (up to 47%) remain white
      },
      // Year 2 methods using December values
      getYear2ExpenseCategories() {
        const expenses = this.financialData.year2ExpenseBreakdown
        const year2Revenue = this.financialData.year2Projections.totalYearlyRevenue

        // Get all expense categories except totalOperatingExpenses
        const categories = Object.keys(expenses)
          .filter((key) => {
            return (
              key !== 'totalOperatingExpenses' &&
              expenses[key] &&
              expenses[key].monthly &&
              Array.isArray(expenses[key].monthly) &&
              expenses[key].monthly.length === 12
            )
          })
          .map((key) => {
            // Calculate the yearly total from monthly values
            const yearlyTotal = expenses[key].monthly.reduce(
              (sum, month) => sum + (month.value || 0),
              0
            )

            const percentage = (yearlyTotal / year2Revenue) * 100
            return {
              key,
              label: this.formatCategoryName(key),
              monthly: expenses[key].monthly,
              yearly: { value: yearlyTotal, note: '' },
              percentage: percentage < 1 ? percentage.toFixed(1) : Math.round(percentage),
            }
          })
          .filter((category) => category.yearly.value > 0) // Exclude zero-value categories
          .sort((a, b) => b.yearly.value - a.yearly.value)

        return categories
      },
      getYear2TotalExpensesMonthly() {
        const expenses = this.financialData.year2ExpenseBreakdown

        // Calculate total expenses for each month across all categories
        return Array.from({ length: 12 }, (_, monthIndex) => {
          const totalValue = Object.keys(expenses).reduce((sum, category) => {
            if (
              category !== 'totalOperatingExpenses' &&
              expenses[category] &&
              expenses[category].monthly
            ) {
              const monthValue = expenses[category].monthly[monthIndex]?.value || 0
              return sum + monthValue
            }
            return sum
          }, 0)

          // Get the note if it exists in an object format, otherwise empty string
          const monthlyData = expenses.totalOperatingExpenses?.monthly?.[monthIndex]
          const note = typeof monthlyData === 'object' && monthlyData?.note ? monthlyData.note : ''

          return {
            value: totalValue,
            note: note,
          }
        })
      },
      getYear2MonthlyTakeHome() {
        const monthlyRevenue = this.financialData.year2Projections.revenue
        const monthlyExpenses = this.getYear2TotalExpensesMonthly()
        return monthlyRevenue.map((revenue, index) => {
          return {
            value: revenue.value - monthlyExpenses[index].value,
            note: `Revenue ($${revenue.value}) - Expenses ($${monthlyExpenses[index].value}) = Net profit/loss`,
          }
        })
      },
      getYear2TotalYearlyTakeHome() {
        return this.getYear2MonthlyTakeHome().reduce((sum, monthly) => sum + monthly.value, 0)
      },
      formatCategoryName(key) {
        // Convert camelCase keys to readable labels
        const labelMap = {
          rent: 'Rent',
          wages: 'Wages & Salaries',
          loanPayment: 'Loan Payment',
          payrollTaxes: 'Payroll Taxes',
          accountingLegal: 'Accounting and Legal',
          advertising: 'Advertising',
          duesSubscriptions: 'Dues and Subscriptions',
          website: 'Website',
          technology: 'Technology (POS, Cameras, etc.)',
          utilities: 'Utilities',
          foodSnacks: 'Food/Snacks',
          bankServiceCharges: 'Bank Service Charges',
          software: 'Software (QuickBooks, etc.)',
          staffTraining: 'Staff Training',
          permits: 'Permits and Licenses',
          communications: 'Communications',
          supplies: 'Supplies',
          facilitySetup: 'Facility Setup',
          miscellaneous: 'Miscellaneous',
          insurance: 'Insurance',
          officeExpenses: 'Office Expenses',
          taxes: 'Taxes',
        }

        return labelMap[key] || key.charAt(0).toUpperCase() + key.slice(1)
      },
      calculateYear2ExpensePercentage(yearlyExpense) {
        const percentage =
          (yearlyExpense / this.financialData.year2Projections.totalYearlyRevenue) * 100
        // If less than 1%, show one decimal place, otherwise round to whole number
        if (percentage < 1) {
          return percentage.toFixed(1) + '%'
        } else {
          return Math.round(percentage) + '%'
        }
      },
      getYear2QuarterlyData() {
        const revenue = this.financialData.year2Projections.revenue
        const monthlyExpenses = this.getYear2TotalExpensesMonthly()

        return [
          {
            quarter: 'Q1 (Jan-Mar)',
            revenue: revenue[0] + revenue[1] + revenue[2],
            expenses: monthlyExpenses[0] + monthlyExpenses[1] + monthlyExpenses[2],
            profit: null, // Will be calculated
          },
          {
            quarter: 'Q2 (Apr-Jun)',
            revenue: revenue[3] + revenue[4] + revenue[5],
            expenses: monthlyExpenses[3] + monthlyExpenses[4] + monthlyExpenses[5],
            profit: null,
          },
          {
            quarter: 'Q3 (Jul-Sep)',
            revenue: revenue[6] + revenue[7] + revenue[8],
            expenses: monthlyExpenses[6] + monthlyExpenses[7] + monthlyExpenses[8],
            profit: null,
          },
          {
            quarter: 'Q4 (Oct-Dec)',
            revenue: revenue[9] + revenue[10] + revenue[11],
            expenses: monthlyExpenses[9] + monthlyExpenses[10] + monthlyExpenses[11],
            profit: null,
          },
        ].map((q) => {
          const profit = q.revenue - q.expenses
          const profitMargin = q.revenue > 0 ? (profit / q.revenue) * 100 : 0
          return {
            ...q,
            profit: profit,
            profitMargin: Math.max(0, Math.min(100, Math.abs(profitMargin))),
          }
        })
      },
    },
  }
</script>

<style scoped>
  /* Custom tooltip styling */
  .expense-cell-with-tooltip {
    position: relative;
    cursor: help;
  }

  .tooltip-text {
    visibility: hidden;
    background-color: #333;
    color: #fff;
    text-align: left;
    border-radius: 6px;
    padding: 10px 15px;
    position: absolute;
    z-index: 1000;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    width: auto;
    max-width: 50vw;
    white-space: normal;
    word-wrap: break-word;
    font-size: 14px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }

  .tooltip-text::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }

  .expense-cell-with-tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 0.95;
  }

  /* Make sure tooltips don't get cut off at the edges of the screen */
  .expense-cell-with-tooltip:hover .tooltip-text {
    min-width: 200px;
    max-width: 50vw;
  }

  .border-success {
    border-color: #28a745 !important;
  }

  .border-2 {
    border-width: 2px !important;
  }

  .table th,
  .table td {
    padding: 0.5rem 0.75rem;
    vertical-align: middle;
  }

  .table thead th {
    background-color: #f8f9fa;
    border-bottom: 2px solid #dee2e6;
  }

  /* Tooltip styles for expense cells */
  .expense-cell-with-tooltip {
    position: relative;
    cursor: help;
  }

  .expense-cell-with-tooltip .tooltip-text {
    visibility: hidden;
    width: 200px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.8rem;
    font-weight: normal;
  }

  .expense-cell-with-tooltip .tooltip-text::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .expense-cell-with-tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
</style>
