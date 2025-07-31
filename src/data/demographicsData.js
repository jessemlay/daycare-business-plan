// Demographics and Market Data for Charts
export const targetMarketData = {
  labels: ['Working Professionals', 'Stay-at-Home Parents', 'Single Parents', 'Visitors & Travelers'],
  datasets: [{
    label: 'Target Market Size (Families)',
    data: [1200, 800, 500, 200],
    backgroundColor: [
      '#28a745',
      '#007bff',
      '#ffc107',
      '#6c757d'
    ],
    borderColor: [
      '#1e7e34',
      '#0056b3', 
      '#e0a800',
      '#545b62'
    ],
    borderWidth: 2
  }]
}

export const marketPenetrationData = {
  labels: ['Year 1', 'Year 2', 'Year 3'],
  datasets: [
    {
      label: 'Target Families',
      data: [100, 200, 300],
      backgroundColor: '#28a745',
      borderColor: '#1e7e34',
      borderWidth: 2
    },
    {
      label: 'Market Share (%)',
      data: [4, 8, 12],
      backgroundColor: '#007bff',
      borderColor: '#0056b3',
      borderWidth: 2
    }
  ]
}

export const populationDemographicsData = {
  labels: ['Children 0-5', 'Children 6-12', 'Adults 25-45', 'Other Adults'],
  datasets: [{
    label: 'Population Distribution',
    data: [5890, 15052, 25000, 43829],
    backgroundColor: [
      '#28a745',
      '#007bff',
      '#ffc107', 
      '#6c757d'
    ],
    borderColor: [
      '#1e7e34',
      '#0056b3',
      '#e0a800',
      '#545b62'
    ],
    borderWidth: 2
  }]
}
