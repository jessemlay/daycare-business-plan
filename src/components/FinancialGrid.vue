<template>
  <div class="financial-grid">
    <div class="table-responsive">
      <table class="table table-sm table-hover">
        <thead class="table-warning">
          <tr>
            <th>{{ titleColumn }}</th>
            <th class="text-center" v-for="(month, index) in months" :key="index">{{ month }}</th>
            <th class="text-center">{{ yearlyColumn }}</th>
            <th class="text-center">{{ percentageColumn }}</th>
          </tr>
        </thead>
        <tbody>
          <!-- Expense categories -->
          <tr
            v-for="(category, key) in categories"
            :key="key"
            :class="getRowClass(category.percentage)"
          >
            <td class="fw-bold">{{ category.label }}</td>
            <td v-for="(expense, index) in category.monthly" :key="index" class="text-end">
              <expense-cell :expense="expense"></expense-cell>
            </td>
            <td class="text-end fw-bold text-success">
              <expense-cell :expense="category.yearly"></expense-cell>
            </td>
            <td class="text-center">
              <span class="badge bg-secondary"
                >{{ category.percentage }}{{ showPercentSign ? '%' : '' }}</span
              >
            </td>
          </tr>

          <!-- Total expenses row -->
          <tr class="table-warning border-top border-3">
            <td class="fw-bold">{{ totalRowLabel }}</td>
            <td
              v-for="(expense, index) in totalExpenses.length > 0
                ? totalExpenses
                : totalMonthlyExpenses"
              :key="index"
              class="text-end fw-bold"
            >
              <expense-cell :expense="expense"></expense-cell>
            </td>
            <td class="text-end fw-bold text-danger">${{ formatNumber(totalYearlyExpense) }}</td>
            <td class="text-center">
              <span class="badge bg-warning text-dark">
                {{ totalPercentage }}{{ showPercentSign ? '%' : '' }}
              </span>
            </td>
          </tr>

          <!-- Monthly revenue row -->
          <tr v-if="showRevenueRow" class="table-primary border-top border-3">
            <td class="fw-bold text-primary">{{ revenueRowLabel }}</td>
            <td
              v-for="(revenue, index) in monthlyRevenue"
              :key="index"
              class="text-end fw-bold text-primary"
            >
              <expense-cell :expense="revenue"></expense-cell>
            </td>
            <td class="text-end fw-bold text-primary">
              <div class="expense-cell-wrapper">
                <div class="expense-cell">${{ formatNumber(totalYearlyRevenue) }}</div>
              </div>
            </td>
            <td class="text-center">
              <span class="badge bg-primary">100%</span>
            </td>
          </tr>

          <!-- Monthly profit row -->
          <tr v-if="showProfitRow" class="table-success border-top border-3">
            <td class="fw-bold text-success">{{ profitRowLabel }}</td>
            <td
              v-for="(profit, index) in monthlyProfit"
              :key="index"
              class="text-end fw-bold"
              :class="{
                'text-success': profit.value >= 0,
                'text-danger': profit.value < 0,
              }"
            >
              <expense-cell :expense="profit"></expense-cell>
            </td>
            <td
              class="text-end fw-bold"
              :class="totalYearlyProfit >= 0 ? 'text-success' : 'text-danger'"
            >
              <div class="expense-cell-wrapper">
                <div class="expense-cell">${{ formatNumber(Math.abs(totalYearlyProfit)) }}</div>
              </div>
            </td>
            <td class="text-center">
              <span class="badge bg-success">
                {{ Math.round((totalYearlyProfit / totalYearlyRevenue) * 100) }}%
              </span>
            </td>
          </tr>

          <!-- Contingency fund row -->
          <tr v-if="showContingencyRow" class="table-info border-top border-3">
            <td class="fw-bold text-info">{{ contingencyRowLabel }}</td>
            <td
              v-for="(balance, index) in contingencyBalances"
              :key="index"
              class="text-end fw-bold"
              :class="balance >= 0 ? 'text-info' : 'text-success'"
            >
              ${{ formatNumber(balance) }}
            </td>
            <td
              class="text-end fw-bold"
              :class="finalContingencyBalance >= 0 ? 'text-info' : 'text-success'"
            >
              ${{ formatNumber(finalContingencyBalance) }}
            </td>
            <td class="text-center">
              <span class="badge" :class="finalContingencyBalance >= 0 ? 'bg-info' : 'bg-success'">
                {{ finalContingencyBalance >= 0 ? 'Available' : 'Paid Off' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import ExpenseCell from './ExpenseCell.vue'

  export default {
    name: 'FinancialGrid',
    components: {
      ExpenseCell,
    },
    props: {
      // Data props
      categories: {
        type: Array,
        required: true,
        default: () => [],
      },
      totalMonthlyExpenses: {
        type: Array,
        required: true,
        default: () => [],
      },
      // For backwards compatibility
      totalExpenses: {
        type: Array,
        default: () => [],
      },
      totalYearlyExpense: {
        type: Number,
        required: true,
        default: 0,
      },
      totalPercentage: {
        type: [String, Number],
        required: true,
        default: '0',
      },
      monthlyRevenue: {
        type: Array,
        default: () => [],
      },
      totalYearlyRevenue: {
        type: Number,
        default: 0,
      },
      monthlyProfit: {
        type: Array,
        default: () => [],
      },
      totalYearlyProfit: {
        type: Number,
        default: 0,
      },
      contingencyBalances: {
        type: Array,
        default: () => [],
      },
      finalContingencyBalance: {
        type: Number,
        default: 0,
      },

      // Customization props
      months: {
        type: Array,
        default: () => [
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
      },
      titleColumn: {
        type: String,
        default: 'Expense Category',
      },
      yearlyColumn: {
        type: String,
        default: 'Yearly',
      },
      percentageColumn: {
        type: String,
        default: '% of Revenue',
      },
      totalRowLabel: {
        type: String,
        default: 'TOTAL OPERATING EXPENSES',
      },
      revenueRowLabel: {
        type: String,
        default: 'MONTHLY REVENUE',
      },
      profitRowLabel: {
        type: String,
        default: 'MONTHLY TAKE-HOME PROFIT',
      },
      contingencyRowLabel: {
        type: String,
        default: 'CONTINGENCY FUND (INITIAL LOAN)',
      },
      showPercentSign: {
        type: Boolean,
        default: false,
      },

      // Show/hide rows
      showRevenueRow: {
        type: Boolean,
        default: true,
      },
      showProfitRow: {
        type: Boolean,
        default: true,
      },
      showContingencyRow: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      formatNumber(value) {
        if (value === null || value === undefined) return '0'
        // Make sure we're dealing with a number before formatting
        const numValue = Number(value)
        if (isNaN(numValue)) {
          console.warn('Invalid value passed to formatNumber:', value)
          return '0'
        }
        return numValue.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      },
      getRowClass(percentage) {
        const numPercentage = parseFloat(percentage)
        if (numPercentage >= 85) return 'table-danger' // Only extremely high percentages are red
        if (numPercentage >= 75) return 'table-warning' // Very high expenses are yellow
        if (numPercentage >= 72) return 'table-info' // High expenses are blue
        return '' // Normal expenses including wages (up to 72%) remain white
      },
      hasValue(expense) {
        if (!expense) return false
        const value = typeof expense === 'object' ? expense.value : expense
        return value !== 0 && value !== null && value !== undefined
      },
      hasNote(expense) {
        if (!expense || typeof expense !== 'object') return false
        return expense.note && expense.note.length > 0
      },
    },
  }
</script>

<style scoped>
  .financial-grid {
    margin-bottom: 2rem;
  }
</style>
