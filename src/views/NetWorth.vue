<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-pie-chart-fill me-2"></i>Personal Net Worth Statement</h5>
        <small class="text-muted">As of {{ formatDate(netWorthData.personalNetWorth.lastUpdated) }}</small>
      </div>
      <div class="card-body">
        <!-- Summary Cards -->
        <div class="row mb-4">
          <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div class="card border-info h-100">
              <div class="card-body text-center p-3">
                <h6 class="text-info mb-2">Available Cash Flow</h6>
                <p class="h6 mb-1">${{ formatNumber(availableCashFlow) }}</p>
                <small class="text-muted">Monthly Income - Obligations</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div class="card border-success h-100">
              <div class="card-body text-center p-3">
                <h6 class="text-success mb-2">Total Assets</h6>
                <p class="h6 mb-1">${{ totalAssets.toLocaleString() }}</p>
                <small class="text-muted">All Assets Combined</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div class="card border-danger h-100">
              <div class="card-body text-center p-3">
                <h6 class="text-danger mb-2">Total Liabilities</h6>
                <p class="h6 mb-1">${{ totalLiabilities.toLocaleString() }}</p>
                <small class="text-muted">All Debts Combined</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
            <div class="card border-primary h-100">
              <div class="card-body text-center p-3">
                <h6 class="text-primary mb-2">Net Worth</h6>
                <p class="h6 mb-1">${{ netWorth.toLocaleString() }}</p>
                <small class="text-muted">Assets - Liabilities</small>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Assets Section -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-success text-white">
                <h6 class="mb-0"><i class="bi bi-plus-circle me-2"></i>Assets</h6>
              </div>
              <div class="card-body">

                <!-- Real Estate -->
                <div class="mb-4">
                  <h6 class="text-success border-bottom pb-2">Real Estate</h6>
                  <div class="table-responsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Property</th>
                          <th class="text-end">Value</th>
                          <th class="text-end">Owed</th>
                          <th class="text-end">Equity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="netWorthData.personalNetWorth.assets.realEstate.primaryHome.currentValue > 0">
                          <td>{{ netWorthData.personalNetWorth.assets.realEstate.primaryHome.description }}</td>
                          <td class="text-end">${{ formatNumber(netWorthData.personalNetWorth.assets.realEstate.primaryHome.currentValue) }}</td>
                          <td class="text-end text-danger">${{ formatNumber(netWorthData.personalNetWorth.assets.realEstate.primaryHome.mortgageBalance) }}</td>
                          <td class="text-end text-success fw-bold">${{ formatNumber(netWorthData.personalNetWorth.assets.realEstate.primaryHome.equity) }}</td>
                        </tr>
                        <tr v-if="netWorthData.personalNetWorth.assets.realEstate.rentalProperty.currentValue > 0">
                          <td>{{ netWorthData.personalNetWorth.assets.realEstate.rentalProperty.description }}</td>
                          <td class="text-end">${{ formatNumber(netWorthData.personalNetWorth.assets.realEstate.rentalProperty.currentValue) }}</td>
                          <td class="text-end text-danger">${{ formatNumber(netWorthData.personalNetWorth.assets.realEstate.rentalProperty.mortgageBalance) }}</td>
                          <td class="text-end text-success fw-bold">${{ formatNumber(netWorthData.personalNetWorth.assets.realEstate.rentalProperty.equity) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Vehicles & Equipment -->
                <div class="mb-4">
                  <h6 class="text-success border-bottom pb-2">Vehicles & Equipment</h6>
                  <div class="table-responsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Vehicle/Equipment</th>
                          <th class="text-end">Value</th>
                          <th class="text-end">Owed</th>
                          <th class="text-end">Equity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="vehicle in visibleVehicles" :key="vehicle.key">
                          <td>{{ vehicle.year }} {{ vehicle.make }} {{ vehicle.model }}</td>
                          <td class="text-end">${{ formatNumber(vehicle.currentValue) }}</td>
                          <td class="text-end text-danger">${{ formatNumber(vehicle.loanBalance) }}</td>
                          <td class="text-end text-success fw-bold">${{ formatNumber(vehicle.equity) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Liquid Assets -->
                <div class="mb-4">
                  <h6 class="text-success border-bottom pb-2">Liquid Assets</h6>
                  <div class="table-responsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Account</th>
                          <th>Institution</th>
                          <th class="text-end">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="netWorthData.personalNetWorth.assets.liquidAssets.checkingAccount.balance > 0">
                          <td>{{ netWorthData.personalNetWorth.assets.liquidAssets.checkingAccount.description }}</td>
                          <td>{{ netWorthData.personalNetWorth.assets.liquidAssets.checkingAccount.institution }}</td>
                          <td class="text-end text-success fw-bold">${{ formatNumber(netWorthData.personalNetWorth.assets.liquidAssets.checkingAccount.balance) }}</td>
                        </tr>
                        <tr v-if="netWorthData.personalNetWorth.assets.liquidAssets.savingsAccount.balance > 0">
                          <td>{{ netWorthData.personalNetWorth.assets.liquidAssets.savingsAccount.description }}</td>
                          <td>{{ netWorthData.personalNetWorth.assets.liquidAssets.savingsAccount.institution }}</td>
                          <td class="text-end text-success fw-bold">${{ formatNumber(netWorthData.personalNetWorth.assets.liquidAssets.savingsAccount.balance) }}</td>
                        </tr>
                        <tr v-if="netWorthData.personalNetWorth.assets.liquidAssets.moneyMarket.balance > 0">
                          <td>{{ netWorthData.personalNetWorth.assets.liquidAssets.moneyMarket.description }} ({{ netWorthData.personalNetWorth.assets.liquidAssets.moneyMarket.interestRate }}%)</td>
                          <td>{{ netWorthData.personalNetWorth.assets.liquidAssets.moneyMarket.institution }}</td>
                          <td class="text-end text-success fw-bold">${{ formatNumber(netWorthData.personalNetWorth.assets.liquidAssets.moneyMarket.balance) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Investments -->
                <div class="mb-4">
                  <h6 class="text-success border-bottom pb-2">Investments & Retirement</h6>
                  <div class="table-responsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Account</th>
                          <th>Institution</th>
                          <th class="text-end">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="netWorthData.personalNetWorth.assets.investments.retirement401k.balance > 0">
                          <td>{{ netWorthData.personalNetWorth.assets.investments.retirement401k.description }}</td>
                          <td>{{ netWorthData.personalNetWorth.assets.investments.retirement401k.institution }}</td>
                          <td class="text-end text-success fw-bold">${{ formatNumber(netWorthData.personalNetWorth.assets.investments.retirement401k.balance) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Liabilities Section -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-danger text-white">
                <h6 class="mb-0"><i class="bi bi-dash-circle me-2"></i>Liabilities</h6>
              </div>
              <div class="card-body">

                <!-- Income -->
                <div class="mb-4">
                  <h6 class="text-success border-bottom pb-2">Monthly Income</h6>
                  <div class="table-responsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Source</th>
                          <th class="text-end">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Primary Earner (Husband)</td>
                          <td class="text-end text-success fw-bold">$6,320</td>
                        </tr>
                        <tr>
                          <td>Secondary Earner (Wife)</td>
                          <td class="text-end text-success fw-bold">$1,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Credit Cards & Loans -->
                <div class="mb-4">
                  <h6 class="text-danger border-bottom pb-2">Credit Cards/Loans</h6>
                  <div class="table-responsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Card</th>
                          <th class="text-end">Balance</th>
                          <th class="text-end">Min Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="netWorthData.personalNetWorth.liabilities.creditCards.card1.balance > 0">
                          <td>{{ netWorthData.personalNetWorth.liabilities.creditCards.card1.description }}</td>
                          <td class="text-end text-danger fw-bold">${{ formatNumber(netWorthData.personalNetWorth.liabilities.creditCards.card1.balance) }}</td>
                          <td class="text-end">${{ formatNumber(netWorthData.personalNetWorth.liabilities.creditCards.card1.minimumPayment) }}</td>
                        </tr>
                        <tr v-if="netWorthData.personalNetWorth.liabilities.creditCards.card2.balance > 0">
                          <td>{{ netWorthData.personalNetWorth.liabilities.creditCards.card2.description }}</td>
                          <td class="text-end text-danger fw-bold">${{ formatNumber(netWorthData.personalNetWorth.liabilities.creditCards.card2.balance) }}</td>
                          <td class="text-end">${{ formatNumber(netWorthData.personalNetWorth.liabilities.creditCards.card2.minimumPayment) }}</td>
                        </tr>
                        <tr v-if="netWorthData.personalNetWorth.liabilities.creditCards.loan1 && netWorthData.personalNetWorth.liabilities.creditCards.loan1.balance > 0">
                          <td>{{ netWorthData.personalNetWorth.liabilities.creditCards.loan1.description }}</td>
                          <td class="text-end text-danger fw-bold">${{ formatNumber(netWorthData.personalNetWorth.liabilities.creditCards.loan1.balance) }}</td>
                          <td class="text-end">${{ formatNumber(netWorthData.personalNetWorth.liabilities.creditCards.loan1.minimumPayment) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Other Debt -->
                <div class="mb-4" v-if="netWorthData.personalNetWorth.liabilities.otherDebt.medicalDebt.balance > 0">
                  <h6 class="text-danger border-bottom pb-2">Other Debt</h6>
                  <div class="table-responsive">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Debt</th>
                          <th class="text-end">Balance</th>
                          <th class="text-end">Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{{ netWorthData.personalNetWorth.liabilities.otherDebt.medicalDebt.description }}</td>
                          <td class="text-end text-danger fw-bold">${{ formatNumber(netWorthData.personalNetWorth.liabilities.otherDebt.medicalDebt.balance) }}</td>
                          <td class="text-end">${{ formatNumber(netWorthData.personalNetWorth.liabilities.otherDebt.medicalDebt.monthlyPayment) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Monthly Cash Flow Calculation -->
                <div class="mt-4">
                  <h6 class="text-info border-bottom pb-2">Monthly Cash Flow Calculation</h6>
                  <div class="card">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-md-3 text-center">
                          <div class="text-success">
                            <strong>Total Income</strong>
                            <br />
                            <h5 class="text-success">$7,820</h5>
                          </div>
                        </div>
                        <div class="col-md-1 text-center">
                          <h4 class="text-muted">-</h4>
                        </div>
                        <div class="col-md-3 text-center">
                          <div class="text-danger">
                            <strong>Total Obligations</strong>
                            <br />
                            <h5 class="text-danger">$1,563.03</h5>
                          </div>
                        </div>
                        <div class="col-md-1 text-center">
                          <h4 class="text-muted">=</h4>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="text-primary">
                            <strong>Available Cash Flow</strong>
                            <br />
                            <h4 class="text-primary fw-bold">$6,256.97</h4>
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
    </div>
  </div>
</template>

<script>
import netWorthData from '@/data/netWorthData.json'

export default {
  name: 'NetWorthPage',
  data() {
    return {
      netWorthData: netWorthData
    }
  },
  computed: {
    // Asset Calculations - Full values + liquid assets + investments
    vehiclesArray() {
      // Convert vehicles object to array for dynamic looping
      const vehicles = this.netWorthData?.personalNetWorth?.assets?.vehicles
      if (!vehicles) return []
      return Object.keys(vehicles).map(key => ({
        key,
        ...vehicles[key]
      }))
    },
    visibleVehicles() {
      // Filter vehicles that have a value greater than 0
      return this.vehiclesArray.filter(vehicle => vehicle.currentValue > 0)
    },
    realEstateAssets() {
      if (!this.netWorthData?.personalNetWorth?.assets?.realEstate) return 0
      return this.netWorthData.personalNetWorth.assets.realEstate.primaryHome.currentValue +
             this.netWorthData.personalNetWorth.assets.realEstate.rentalProperty.currentValue
    },
    vehicleAssets() {
      return this.vehiclesArray.reduce((total, vehicle) => total + (vehicle.equity || 0), 0)
    },
    liquidAssetsTotal() {
      const liquid = this.netWorthData.personalNetWorth.assets.liquidAssets
      return liquid.checkingAccount.balance +
             liquid.savingsAccount.balance +
             liquid.moneyMarket.balance
    },
    investmentTotal() {
      const investments = this.netWorthData.personalNetWorth.assets.investments
      return investments.retirement401k.balance
    },
    totalAssets() {
      return this.realEstateAssets +
             this.vehicleAssets +
             this.liquidAssetsTotal +
             this.investmentTotal
    },

    // Liability Calculations - Only credit cards and loans (not mortgages)
    mortgageDebt() {
      return this.netWorthData.personalNetWorth.assets.realEstate.primaryHome.mortgageBalance +
             this.netWorthData.personalNetWorth.assets.realEstate.rentalProperty.mortgageBalance
    },
    vehicleDebt() {
      return this.vehiclesArray.reduce((total, vehicle) => total + vehicle.loanBalance, 0)
    },
    creditCardDebt() {
      const cards = this.netWorthData.personalNetWorth.liabilities.creditCards
      return cards.card1.balance + cards.card2.balance + (cards.loan1?.balance || 0)
    },
    otherDebt() {
      return this.netWorthData.personalNetWorth.liabilities.otherDebt.medicalDebt.balance
    },
    totalLiabilities() {
      return this.mortgageDebt +
             this.vehicleDebt +
             this.creditCardDebt +
             this.otherDebt
    },

    // Net Worth
    netWorth() {
      return this.totalAssets - this.totalLiabilities
    },

    // Monthly Payment Calculations
    totalMonthlyDebtPayments() {
      const vehicles = this.netWorthData.personalNetWorth.assets.vehicles
      const creditCards = this.netWorthData.personalNetWorth.liabilities.creditCards
      const loans = this.netWorthData.personalNetWorth.liabilities

      return vehicles.car1.monthlyPayment +
             vehicles.car2.monthlyPayment +
             vehicles.tractor.monthlyPayment +
             creditCards.card1.minimumPayment +
             creditCards.card2.minimumPayment +
             loans.otherDebt.medicalDebt.monthlyPayment
    },
    totalMonthlyPayments() {
      return this.netWorthData.personalNetWorth.assets.realEstate.primaryHome.monthlyPayment +
             this.totalMonthlyDebtPayments
    },

    // Income and Cash Flow Calculations
    totalMonthlyIncome() {
      return 6320 + 1500  // Primary Earner + Secondary Earner
    },
    availableCashFlow() {
      return this.totalMonthlyIncome - this.totalMonthlyPayments
    }
  },
  methods: {
    formatNumber(number) {
      return number.toLocaleString()
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}
</style>
