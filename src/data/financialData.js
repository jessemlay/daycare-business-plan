// Financial Data for Charts
export const revenueBreakdownData = {
  labels: [
    'Registered Hourly Care (6-18 months)',
    'Registered Hourly Care (8 months-12 years)',
    'Drop-In Care',
    'Monthly Block Plans',
    'Registration Fees',
  ],
  datasets: [
    {
      label: 'Monthly Revenue ($)',
      data: [4800, 5600, 2400, 1800, 400],
      backgroundColor: ['#28a745', '#007bff', '#ffc107', '#17a2b8', '#6c757d'],
      borderColor: ['#1e7e34', '#0056b3', '#e0a800', '#117a8b', '#545b62'],
      borderWidth: 2,
    },
  ],
}

export const monthlyProjectionsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue ($)',
      data: [10860, 13032, 14560, 17224, 19436, 21644, 23872, 26520, 28732, 31124, 33496, 35900],
      borderColor: '#28a745',
      backgroundColor: 'rgba(40, 167, 69, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Expenses ($)',
      data: [40759, 15744, 15744, 15744, 15744, 15744, 15744, 15744, 15744, 15744, 15744, 15744],
      borderColor: '#dc3545',
      backgroundColor: 'rgba(220, 53, 69, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Net Income ($)',
      data: [-29899, -2712, -1184, 1480, 3692, 5900, 8128, 10776, 12988, 15380, 17752, 20156],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
}

export const expenseBreakdownData = {
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
    'Other Expenses',
  ],
  datasets: [
    {
      label: 'Annual Expenses ($)',
      data: [112620, 30000, 21650, 9048, 6000, 5400, 5600, 4800, 4325, 14500],
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

export const annualGrowthData = {
  labels: ['Year 1', 'Year 2', 'Year 3'],
  datasets: [
    {
      label: 'Annual Revenue ($)',
      data: [180000, 216000, 259200],
      borderColor: '#28a745',
      backgroundColor: 'rgba(40, 167, 69, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Annual Profit ($)',
      data: [61200, 80000, 102000],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
}

export const startupInvestmentData = {
  labels: ['Facility Setup', 'Equipment', 'Legal & Licensing', 'Marketing', 'Working Capital'],
  datasets: [
    {
      label: 'Startup Investment ($)',
      data: [35000, 20000, 8000, 5000, 7000],
      backgroundColor: ['#28a745', '#007bff', '#ffc107', '#dc3545', '#6c757d'],
      borderColor: ['#1e7e34', '#0056b3', '#e0a800', '#bd2130', '#545b62'],
      borderWidth: 2,
    },
  ],
}

export const pricingComparisonData = {
  labels: ['Ages 6-18 months', 'Ages 8 months-12 years', 'Additional Children'],
  datasets: [
    {
      label: 'Registered Rate ($/hr)',
      data: [16, 14, 8],
      backgroundColor: '#28a745',
      borderColor: '#1e7e34',
      borderWidth: 2,
    },
    {
      label: 'Drop-In Rate ($/hr)',
      data: [18, 16, 16],
      backgroundColor: '#dc3545',
      borderColor: '#bd2130',
      borderWidth: 2,
    },
  ],
}

export const blockPlanSavingsData = {
  labels: ['$300 Block Plan', '$500 Block Plan'],
  datasets: [
    {
      label: 'Purchase Amount ($)',
      data: [300, 500],
      backgroundColor: '#ffc107',
      borderColor: '#e0a800',
      borderWidth: 2,
    },
    {
      label: 'Credit Received ($)',
      data: [345, 600],
      backgroundColor: '#28a745',
      borderColor: '#1e7e34',
      borderWidth: 2,
    },
    {
      label: 'Savings ($)',
      data: [45, 100],
      backgroundColor: '#17a2b8',
      borderColor: '#117a8b',
      borderWidth: 2,
    },
  ],
}

// Cash flow analysis
export const cashFlowData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Operating Income ($)',
      data: [-29899, -2712, -1184, 1480, 3692, 5900, 8128, 10776, 12988, 15380, 17752, 20156],
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

// Capacity and staffing growth
export const capacityGrowthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Kids per Day',
      data: [15, 18, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47],
      borderColor: '#28a745',
      backgroundColor: 'rgba(40, 167, 69, 0.2)',
      yAxisID: 'y',
      tension: 0.4,
    },
    {
      label: 'Total Capacity',
      data: [20, 20, 20, 32, 32, 32, 44, 44, 44, 56, 56, 56],
      borderColor: '#ffc107',
      backgroundColor: 'rgba(255, 193, 7, 0.2)',
      yAxisID: 'y',
      tension: 0.4,
      borderDash: [5, 5],
    },
    {
      label: 'Number of Teachers',
      data: [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
      borderColor: '#dc3545',
      backgroundColor: 'rgba(220, 53, 69, 0.2)',
      yAxisID: 'y1',
      tension: 0.4,
    },
  ],
}
