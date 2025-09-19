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
                <p class="h5">
                  ${{ financialData.monthlyProjections.totalYearlyRevenue.toLocaleString() }}
                </p>
                <small class="text-muted">Year 1 Total</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-warning">
              <div class="card-body text-center">
                <h4 class="text-warning">Expenses</h4>
                <p class="h5">
                  ${{ financialData.monthlyProjections.totalYearlyExpenses.toLocaleString() }}
                </p>
                <small class="text-muted">Year 1 Total</small>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-success">
              <div class="card-body text-center">
                <h4 class="text-success">Net Income</h4>
                <p class="h5">
                  ${{ financialData.monthlyProjections.totalNetIncome.toLocaleString() }}
                </p>
                <small class="text-muted">Year 1 Profit</small>
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
                        <td>{{ financialData.monthlyProjections.kidsPerDay[index] }}</td>
                        <td>{{ getTeacherRatioDisplay(index) }}</td>
                        <td>{{ financialData.monthlyProjections.registeredKids[index] }}</td>
                        <td>{{ financialData.monthlyProjections.nonRegisteredKids[index] }}</td>
                        <td
                          :class="
                            financialData.monthlyProjections.registrationFees[index] > 0
                              ? 'text-info'
                              : 'text-muted'
                          "
                        >
                          ${{ financialData.monthlyProjections.registrationFees[index] }}
                        </td>
                        <td class="text-success fw-bold">
                          ${{ formatNumber(financialData.monthlyProjections.revenue[index]) }}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot class="table-success">
                      <tr>
                        <th colspan="6">Total Year 1 Revenue</th>
                        <th class="text-success">
                          ${{
                            financialData.monthlyProjections.totalYearlyRevenue.toLocaleString()
                          }}
                        </th>
                      </tr>
                      <tr>
                        <th colspan="6">Average Monthly Revenue</th>
                        <th class="text-success">
                          ${{
                            Math.round(
                              financialData.monthlyProjections.totalYearlyRevenue / 12
                            ).toLocaleString()
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
                <h6><i class="bi bi-cash-stack me-2"></i>Monthly Operating Expenses Breakdown</h6>
                <small class="text-muted">Year-over-Year Analysis</small>

                <!-- Tab Navigation -->
                <ul class="nav nav-tabs card-header-tabs mt-2" role="tablist">
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
                <!-- Tab Content -->
                <div class="tab-content">
                  <!-- Year 1 Tab -->
                  <div v-if="activeExpenseTab === 'year1'">
                    <!-- Debug: Current tab = {{ activeExpenseTab }} -->
                    <!-- Expense Summary Cards -->
                    <div class="row mb-4">
                      <div class="col-md-4">
                        <div class="card bg-warning text-white">
                          <div class="card-body text-center">
                            <h4>
                              ${{
                                formatNumber(
                                  financialData.expenseBreakdown.totalOperatingExpenses.yearly -
                                    startupData.startupSummary.startupCosts
                                )
                              }}
                            </h4>
                            <p class="mb-0">Total Operating Expenses</p>
                            <small
                              >{{
                                calculateExpensePercentage(
                                  financialData.expenseBreakdown.totalOperatingExpenses.yearly -
                                    startupData.startupSummary.startupCosts
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
                      <table class="table table-sm table-hover">
                        <thead class="table-warning">
                          <tr>
                            <th>Expense Category</th>
                            <th class="text-center">Jan</th>
                            <th class="text-center">Feb</th>
                            <th class="text-center">Mar</th>
                            <th class="text-center">Apr</th>
                            <th class="text-center">May</th>
                            <th class="text-center">Jun</th>
                            <th class="text-center">Jul</th>
                            <th class="text-center">Aug</th>
                            <th class="text-center">Sep</th>
                            <th class="text-center">Oct</th>
                            <th class="text-center">Nov</th>
                            <th class="text-center">Dec</th>
                            <th class="text-center">Yearly</th>
                            <th class="text-center">% of Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!-- Major expense categories -->
                          <tr
                            v-for="(category, key) in getTopExpenseCategories()"
                            :key="key"
                            :class="getExpenseRowClass(category.percentage)"
                          >
                            <td class="fw-bold">{{ category.label }}</td>
                            <td
                              v-for="(amount, index) in category.monthly"
                              :key="index"
                              class="text-end"
                            >
                              ${{ formatNumber(amount) }}
                            </td>
                            <td class="text-end fw-bold text-success">
                              ${{ formatNumber(category.yearly) }}
                            </td>
                            <td class="text-center">
                              <span class="badge bg-secondary">{{ category.percentage }}</span>
                            </td>
                          </tr>
                          <!-- Total row -->
                          <tr class="table-warning border-top border-3">
                            <td class="fw-bold">TOTAL OPERATING EXPENSES</td>
                            <td
                              v-for="(amount, index) in getTotalExpensesMonthly()"
                              :key="index"
                              class="text-end fw-bold"
                            >
                              ${{ formatNumber(amount) }}
                            </td>
                            <td class="text-end fw-bold text-danger">
                              ${{
                                formatNumber(
                                  financialData.expenseBreakdown.totalOperatingExpenses.yearly
                                )
                              }}
                            </td>
                            <td class="text-center">
                              <span class="badge bg-warning text-dark">{{
                                calculateExpensePercentage(
                                  financialData.expenseBreakdown.totalOperatingExpenses.yearly
                                )
                              }}</span>
                            </td>
                          </tr>
                          <!-- Monthly Revenue row -->
                          <tr class="table-primary border-top border-3">
                            <td class="fw-bold text-primary">MONTHLY REVENUE</td>
                            <td
                              v-for="(amount, index) in financialData.monthlyProjections.revenue"
                              :key="index"
                              class="text-end fw-bold text-primary"
                            >
                              ${{ formatNumber(amount) }}
                            </td>
                            <td class="text-end fw-bold text-primary">
                              ${{
                                formatNumber(financialData.monthlyProjections.totalYearlyRevenue)
                              }}
                            </td>
                            <td class="text-center">
                              <span class="badge bg-primary">100%</span>
                            </td>
                          </tr>
                          <!-- Monthly Take-Home row -->
                          <tr class="table-success border-top border-3">
                            <td class="fw-bold text-success">MONTHLY TAKE-HOME PROFIT</td>
                            <td
                              v-for="(amount, index) in getMonthlyTakeHome()"
                              :key="index"
                              class="text-end fw-bold text-success"
                            >
                              ${{ formatNumber(amount) }}
                            </td>
                            <td class="text-end fw-bold text-success">
                              ${{ formatNumber(getTotalYearlyTakeHome()) }}
                            </td>
                            <td class="text-center">
                              <span class="badge bg-success"
                                >{{
                                  Math.round(
                                    (getTotalYearlyTakeHome() /
                                      financialData.monthlyProjections.totalYearlyRevenue) *
                                      100
                                  )
                                }}%</span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                  </div>

                  <!-- Year 2 Tab -->
                  <div v-if="activeExpenseTab === 'year2'">
                    <!-- Year 2 Expense Summary Cards -->
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

                    <!-- Year 2 Detailed Monthly Table -->
                    <div class="table-responsive">
                      <table class="table table-sm table-hover">
                        <thead class="table-warning">
                          <tr>
                            <th>Expense Category</th>
                            <th class="text-center">Jan</th>
                            <th class="text-center">Feb</th>
                            <th class="text-center">Mar</th>
                            <th class="text-center">Apr</th>
                            <th class="text-center">May</th>
                            <th class="text-center">Jun</th>
                            <th class="text-center">Jul</th>
                            <th class="text-center">Aug</th>
                            <th class="text-center">Sep</th>
                            <th class="text-center">Oct</th>
                            <th class="text-center">Nov</th>
                            <th class="text-center">Dec</th>
                            <th class="text-center">Yearly</th>
                            <th class="text-center">% of Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!-- Year 2 expense categories -->
                          <tr
                            v-for="category in getYear2ExpenseCategories()"
                            :key="category.key"
                            :class="getExpenseRowClass(category.percentage)"
                          >
                            <td class="fw-bold">{{ category.label }}</td>
                            <td
                              v-for="(amount, index) in category.monthly"
                              :key="index"
                              class="text-end"
                            >
                              ${{ formatNumber(amount) }}
                            </td>
                            <td class="text-end fw-bold text-success">
                              ${{ formatNumber(category.yearly) }}
                            </td>
                            <td class="text-center">
                              <span class="badge bg-secondary">{{ category.percentage }}%</span>
                            </td>
                          </tr>
                          <!-- Year 2 Total row -->
                          <tr class="table-warning border-top border-3">
                            <td class="fw-bold">TOTAL OPERATING EXPENSES</td>
                            <td
                              v-for="(amount, index) in getYear2TotalExpensesMonthly()"
                              :key="index"
                              class="text-end fw-bold"
                            >
                              ${{ formatNumber(amount) }}
                            </td>
                            <td class="text-end fw-bold text-danger">
                              ${{
                                formatNumber(
                                  getYear2ExpenseCategories().reduce(
                                    (sum, cat) => sum + cat.yearly,
                                    0
                                  )
                                )
                              }}
                            </td>
                            <td class="text-center">
                              <span class="badge bg-warning text-dark">
                                {{
                                  Math.round(
                                    (getYear2ExpenseCategories().reduce(
                                      (sum, cat) => sum + cat.yearly,
                                      0
                                    ) /
                                      financialData.year2Projections.totalYearlyRevenue) *
                                      100
                                  )
                                }}%
                              </span>
                            </td>
                          </tr>
                          <!-- Year 2 Monthly Revenue row -->
                          <tr class="table-primary border-top border-3">
                            <td class="fw-bold text-primary">MONTHLY REVENUE</td>
                            <td
                              v-for="(amount, index) in financialData.year2Projections.revenue"
                              :key="index"
                              class="text-end fw-bold text-primary"
                            >
                              ${{ formatNumber(amount) }}
                            </td>
                            <td class="text-end fw-bold text-primary">
                              ${{ formatNumber(financialData.year2Projections.totalYearlyRevenue) }}
                            </td>
                            <td class="text-center">
                              <span class="badge bg-primary">100%</span>
                            </td>
                          </tr>
                          <!-- Year 2 Monthly Take-Home row -->
                          <tr class="table-success border-top border-3">
                            <td class="fw-bold text-success">MONTHLY TAKE-HOME PROFIT</td>
                            <td
                              v-for="(amount, index) in getYear2MonthlyTakeHome()"
                              :key="index"
                              class="text-end fw-bold text-success"
                            >
                              ${{ formatNumber(amount) }}
                            </td>
                            <td class="text-end fw-bold text-success">
                              ${{ formatNumber(getYear2TotalYearlyTakeHome()) }}
                            </td>
                            <td class="text-center">
                              <span class="badge bg-success">
                                {{
                                  Math.round(
                                    (getYear2TotalYearlyTakeHome() /
                                      (financialData.monthlyProjections.revenue[11] * 12)) *
                                      100
                                  )
                                }}%
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <!-- Year 2 Expense Category Analysis -->
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

                    <!-- Year 2 Analysis -->
                    <div class="row mt-4">
                      <div class="col-md-12">
                        <div class="alert alert-success">
                          <strong>Year 2 Outlook:</strong>
                          Based on projected growth and operational stability, Year 2 projects
                          consistent monthly revenue of ${{
                            formatNumber(financialData.year2Projections.revenue[0])
                          }}
                          and expenses of ${{ formatNumber(getYear2TotalExpensesMonthly()[0]) }},
                          resulting in steady monthly profit of ${{
                            formatNumber(getYear2MonthlyTakeHome()[0])
                          }}. Annual revenue expected to reach ${{
                            formatNumber(financialData.year2Projections.totalYearlyRevenue)
                          }}.
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
  import financialData from '@/data/financialData.json'
  import startupData from '@/data/startupData.json'

  export default {
    name: 'FinancialPage',
    components: {
      FinancialChart,
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
      monthlyChartData() {
        const isYear2 = this.activeExpenseTab === 'year2'
        const revenue = isYear2
          ? this.financialData.year2Projections.revenue
          : this.financialData.monthlyProjections.revenue
        const expenses = isYear2
          ? this.getYear2TotalExpensesMonthly()
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
    },
    methods: {
      getTeacherRatioDisplay(index) {
        const teachers = this.financialData.monthlyProjections.teachers[index]
        const capacity = this.financialData.monthlyProjections.capacity[index]

        // Calculate how many teachers are for 1:8 ratio vs 1:12 ratio
        const teachers8to1 = Math.min(
          1,
          Math.ceil(this.financialData.monthlyProjections.kidsPerDay[index] / 8)
        )
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
          const monthlyRevenue = this.financialData.monthlyProjections.revenue[monthIndex]
          const monthlyExpenses = this.getTotalExpensesMonthly()[monthIndex]
          return monthlyRevenue - monthlyExpenses
        })
      },
      getTotalYearlyTakeHome() {
        return this.getMonthlyTakeHome().reduce((sum, monthly) => sum + monthly, 0)
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
        const expenses = this.financialData.expenseBreakdown
        // Sum all expense categories for each month
        return Array.from({ length: 12 }, (_, monthIndex) => {
          return Object.keys(expenses).reduce((sum, category) => {
            if (category !== 'totalOperatingExpenses' && expenses[category].monthly) {
              return sum + expenses[category].monthly[monthIndex]
            }
            return sum
          }, 0)
        })
      },
      getExpenseRowClass(percentage) {
        if (percentage >= 45) return 'table-danger' // Only very high percentages are red
        if (percentage >= 25) return 'table-warning' // High but normal for major expenses
        if (percentage >= 10) return 'table-info' // Moderate expenses
        return ''
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
              expenses[key].monthly.length === 12 &&
              expenses[key].yearly > 0 // Exclude zero-value categories
            )
          })
          .map((key) => {
            return {
              key,
              label: this.formatCategoryName(key),
              monthly: expenses[key].monthly,
              yearly: expenses[key].yearly,
              percentage: Math.round((expenses[key].yearly / year2Revenue) * 100),
            }
          })
          .sort((a, b) => b.yearly - a.yearly)

        return categories
      },
      getYear2TotalExpensesMonthly() {
        return this.financialData.year2ExpenseBreakdown.totalOperatingExpenses.monthly
      },
      getYear2MonthlyTakeHome() {
        const monthlyRevenue = this.financialData.year2Projections.revenue
        const monthlyExpenses = this.getYear2TotalExpensesMonthly()
        return monthlyRevenue.map((revenue, index) => revenue - monthlyExpenses[index])
      },
      getYear2TotalYearlyTakeHome() {
        return this.getYear2MonthlyTakeHome().reduce((sum, monthly) => sum + monthly, 0)
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
