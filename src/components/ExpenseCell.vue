<template>
  <div class="expense-cell-wrapper">
    <div
      ref="cellContainer"
      class="expense-cell"
      :class="{ 'has-note': hasNote }"
      v-if="hasNote"
      data-bs-toggle="tooltip"
      data-bs-html="false"
      data-bs-placement="auto"
      :title="noteContent"
    >
      ${{ formattedValue }}
    </div>
    <div v-else class="expense-cell">${{ formattedValue }}</div>
  </div>
</template>

<script>
  export default {
    name: 'ExpenseCell',
    props: {
      // Supports both object format { value: number, note: string }
      // and primitive number format
      expense: {
        type: [Object, Number],
        required: true,
      },
    },
    computed: {
      hasNote() {
        return this.isObject && this.expense.note && this.expense.note.length > 0
      },
      isObject() {
        return typeof this.expense === 'object' && this.expense !== null
      },
      expenseValue() {
        if (this.isObject) {
          return this.expense.value || 0
        }
        return this.expense || 0
      },
      noteContent() {
        if (this.isObject && this.expense.note) {
          return this.expense.note
        }
        return ''
      },
      formattedValue() {
        return this.formatNumber(this.expenseValue)
      },
      isTooltipBottom() {
        return this.tooltipShouldBeBelow
      },
    },
    mounted() {
      if (this.hasNote && this.$refs.cellContainer) {
        // Initialize Bootstrap tooltip
        import('bootstrap').then((bootstrap) => {
          const tooltipElement = this.$refs.cellContainer
          new bootstrap.Tooltip(tooltipElement, {
            container: 'body',
            boundary: 'window',
            fallbackPlacements: ['top', 'bottom', 'left', 'right'],
          })
        })
      }
    },
    methods: {
      formatNumber(value) {
        // Ensure the value is a number before calling toLocaleString
        const numValue = Number(value)
        if (isNaN(numValue)) {
          // Silent fail with fallback value
          return '0'
        }
        return numValue.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      },
    },
  }
</script>

<style scoped>
  .expense-cell-wrapper {
    text-align: right;
  }

  .expense-cell {
    display: inline-block;
  }

  .expense-cell.has-note {
    cursor: help;
    background-color: #fff3cd; /* Yellow background for notes */
    padding: 3px 6px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(255, 193, 7, 0.25);
  }

  /* Override Bootstrap tooltip styles to ensure they're visible above tables */
  :deep(.tooltip) {
    z-index: 9999 !important;
  }

  :deep(.tooltip-inner) {
    max-width: 300px;
    padding: 10px;
    text-align: left;
    font-size: 0.9rem;
    line-height: 1.4;
  }
</style>
