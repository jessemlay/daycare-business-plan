<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-cash-stack me-2"></i>Startup Costs</h5>
      </div>
      <div class="card-body">
        <!-- Startup Summary -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="alert alert-success">
              <h6><i class="bi bi-info-circle me-2"></i>Startup Investment Overview</h6>
              <p class="mb-0">
                Initial investment required to launch KidZone drop-in daycare facility
              </p>
            </div>
          </div>
        </div>

        <!-- Detailed Startup Costs -->
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-building me-2"></i>Startup Costs Breakdown</h6>
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <template v-for="category in startupCosts" :key="category.category">
                      <tr class="table-light">
                        <td colspan="2">
                          <h6 class="mb-0" :class="`text-${category.color}`">
                            {{ category.category }}
                          </h6>
                        </td>
                      </tr>
                      <tr v-for="item in category.items" :key="item.item">
                        <td class="ps-4">{{ item.item }}</td>
                        <td class="text-end fw-bold">${{ item.cost.toLocaleString() }}</td>
                      </tr>
                      <tr :class="`table-${category.color}`">
                        <th class="ps-4">{{ category.category }} Subtotal</th>
                        <th class="text-end">
                          ${{
                            category.items
                              .reduce((total, item) => total + item.cost, 0)
                              .toLocaleString()
                          }}
                        </th>
                      </tr>
                    </template>
                  </tbody>
                  <tfoot class="table-success">
                    <tr>
                      <th>Total</th>
                      <th class="text-end">
                        ${{
                          startupCosts
                            .reduce(
                              (total, category) =>
                                total +
                                category.items.reduce((catTotal, item) => catTotal + item.cost, 0),
                              0
                            )
                            .toLocaleString()
                        }}
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Investment Summary -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card border-success">
              <div class="card-header">
                <h5><i class="bi bi-calculator me-2"></i>Total Startup Investment</h5>
              </div>
              <div class="card-body">
                <div class="row text-center">
                  <div v-for="cost in startupCosts" :key="cost.category" class="col-md-2">
                    <h6>{{ cost.category }}</h6>
                    <h4 :class="`text-${cost.color}`">${{ cost.subtotal.toLocaleString() }}</h4>
                  </div>
                </div>
                <hr />
                <div class="text-center">
                  <h3 class="text-success">
                    Total Required: ${{ startupSummary.totalInvestment.toLocaleString() }}
                  </h3>
                  <hr />
                  <div class="row">
                    <div class="col-md-6">
                      <h6 class="text-primary">Startup Costs</h6>
                      <h4 class="text-primary">
                        ${{ startupSummary.startupCosts.toLocaleString() }}
                      </h4>
                    </div>
                    <div class="col-md-6">
                      <h6 class="text-warning">Contingency Fund</h6>
                      <h4 class="text-warning">
                        ${{ startupSummary.contingencyFund.toLocaleString() }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Funding Sources -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-bank me-2"></i>Funding Structure</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-primary">Personal Investment</h6>
                    <p class="text-muted">{{ fundingStrategy.personalInvestment.source }}</p>
                    <h5 class="text-success">
                      ${{ fundingStrategy.personalInvestment.amount.toLocaleString() }} ({{
                        fundingStrategy.personalInvestment.percentage
                      }}%)
                    </h5>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-primary">Business Loan</h6>
                    <p class="text-muted">{{ fundingStrategy.businessLoan.terms }}</p>
                    <h5 class="text-warning">
                      ${{ fundingStrategy.businessLoan.amount.toLocaleString() }} ({{
                        fundingStrategy.businessLoan.percentage
                      }}%)
                    </h5>
                    <small class="text-muted"
                      >Monthly payment: ${{
                        fundingStrategy.businessLoan.monthlyPayment.toLocaleString()
                      }}</small
                    >
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
  import startupData from '@/data/startupData.json'

  export default {
    name: 'StartupPage',
    data() {
      return {
        ...startupData,
      }
    },
  }
</script>
