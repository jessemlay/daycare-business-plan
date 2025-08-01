// Financial Data for Charts
export const revenueBreakdownData = {
  labels: ['Full Day Care', 'Half Day Care', 'Hourly Care', 'Emergency Care'],
  datasets: [
    {
      label: 'Monthly Revenue ($)',
      data: [6750, 3000, 2400, 1200],
      backgroundColor: ['#28a745', '#007bff', '#ffc107', '#dc3545'],
      borderColor: ['#1e7e34', '#0056b3', '#e0a800', '#bd2130'],
      borderWidth: 2,
    },
  ],
}

export const monthlyProjectionsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue ($)',
      data: [13350, 13350, 13350, 13350, 13350, 13350, 13350, 13350, 13350, 13350, 13350, 13350],
      borderColor: '#28a745',
      backgroundColor: 'rgba(40, 167, 69, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Expenses ($)',
      data: [9900, 9900, 9900, 9900, 9900, 9900, 9900, 9900, 9900, 9900, 9900, 9900],
      borderColor: '#ffc107',
      backgroundColor: 'rgba(255, 193, 7, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Net Profit ($)',
      data: [3450, 3450, 3450, 3450, 3450, 3450, 3450, 3450, 3450, 3450, 3450, 3450],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
}

export const expenseBreakdownData = {
  labels: [
    'Rent/Lease',
    'Staff Wages',
    'Food/Snacks',
    'Insurance',
    'Supplies',
    'Marketing',
    'Utilities',
    'Other',
  ],
  datasets: [
    {
      label: 'Monthly Expenses ($)',
      data: [2500, 4800, 600, 450, 400, 300, 300, 550],
      backgroundColor: [
        '#dc3545',
        '#ffc107',
        '#28a745',
        '#007bff',
        '#6c757d',
        '#e83e8c',
        '#17a2b8',
        '#fd7e14',
      ],
      borderColor: [
        '#bd2130',
        '#e0a800',
        '#1e7e34',
        '#0056b3',
        '#545b62',
        '#d91a72',
        '#117a8b',
        '#dc6545',
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
      data: [160200, 184000, 212000],
      borderColor: '#28a745',
      backgroundColor: 'rgba(40, 167, 69, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Annual Profit ($)',
      data: [41400, 55000, 70000],
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
