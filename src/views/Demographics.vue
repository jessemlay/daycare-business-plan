<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-graph-up me-2"></i>Demographics & Market Analysis</h5>
      </div>
      <div class="card-body">
        <!-- Key Statistics -->
        <div class="row mb-4">
          <div class="col-md-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <h2 class="text-primary">89,771</h2>
                <p class="mb-0">Total Population</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <h2 class="text-success">30.8%</h2>
                <p class="mb-0">Households with Children</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <h2 class="text-warning">$54,009</h2>
                <p class="mb-0">Median Income</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <h2 class="text-info">36.5</h2>
                <p class="mb-0">Median Age</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Demographics -->
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="card border-primary">
              <div class="card-body">
                <h6 class="card-title text-primary">Family Structure</h6>
                <ul class="list-unstyled">
                  <li><strong>Single-Parent Households:</strong> 7.8%</li>
                  <li><strong>Homeownership Rate:</strong> 53%</li>
                  <li><strong>Average Commute:</strong> 17.3 minutes</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-success">
              <div class="card-body">
                <h6 class="card-title text-success">Economic Indicators</h6>
                <ul class="list-unstyled">
                  <li><strong>Per Capita Income:</strong> $30,504</li>
                  <li><strong>Median Property Value:</strong> $181,900</li>
                  <li><strong>Bachelor's Degree+:</strong> 24.3%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Target Customer Analysis -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card border-success">
              <div class="card-header">
                <h6><i class="bi bi-bullseye me-2"></i>Target Customer Profiles</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <h6 class="text-success">Primary Target: Working Professionals</h6>
                        <ul class="list-unstyled">
                          <li><strong>Age Range:</strong> 25-45 years</li>
                          <li><strong>Income:</strong> $45,000 - $85,000</li>
                          <li><strong>Children:</strong> 1-3 kids (ages 6 months - 12 years)</li>
                          <li><strong>Employment:</strong> Full-time professionals</li>
                          <li><strong>Needs:</strong> Flexible, reliable childcare</li>
                          <li>
                            <strong>Pain Points:</strong> Irregular schedules, last-minute needs
                          </li>
                        </ul>
                        <div class="alert alert-success">
                          <strong>Market Size:</strong> ~1,200 families
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-body">
                        <h6 class="text-info">Secondary Target: Stay-at-Home Parents</h6>
                        <ul class="list-unstyled">
                          <li><strong>Age Range:</strong> 22-40 years</li>
                          <li><strong>Income:</strong> $35,000 - $65,000 (household)</li>
                          <li><strong>Children:</strong> 1-4 kids (various ages)</li>
                          <li><strong>Employment:</strong> One parent stays home</li>
                          <li><strong>Needs:</strong> Respite care, social interaction</li>
                          <li><strong>Pain Points:</strong> Need breaks, appointments</li>
                        </ul>
                        <div class="alert alert-info">
                          <strong>Market Size:</strong> ~800 families
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Analysis -->
        <div class="row mb-4">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-graph-up me-2"></i>Market Analysis & Opportunity</h6>
              </div>
              <div class="card-body">
                <h6 class="text-primary">Market Demand Indicators</h6>
                <ul>
                  <li>
                    <strong>Working Mothers:</strong> 67.8% of mothers with children under 6 are in
                    labor force
                  </li>
                  <li>
                    <strong>Limited Options:</strong> Only 3 drop-in daycare facilities currently in
                    area
                  </li>
                  <li><strong>Population Growth:</strong> Fort Smith growing at 1.2% annually</li>
                  <li>
                    <strong>Economic Stability:</strong> Diverse economy with healthcare, logistics,
                    manufacturing
                  </li>
                </ul>

                <h6 class="text-primary mt-4">Competition Analysis</h6>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Competitor</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Pricing</th>
                        <th>Weakness</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ABC Daycare</td>
                        <td>Traditional</td>
                        <td>60 kids</td>
                        <td>$150/week</td>
                        <td>No drop-in option</td>
                      </tr>
                      <tr>
                        <td>Little Angels</td>
                        <td>Home-based</td>
                        <td>12 kids</td>
                        <td>$8/hour</td>
                        <td>Limited hours</td>
                      </tr>
                      <tr>
                        <td>Kid's Corner</td>
                        <td>Drop-in</td>
                        <td>25 kids</td>
                        <td>$12/hour</td>
                        <td>Limited age range</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="alert alert-success mt-3">
                  <strong>Market Opportunity:</strong> Estimated 2,500+ families need flexible
                  childcare, current capacity serves less than 40% of demand.
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-info">
              <div class="card-header">
                <h6><i class="bi bi-pie-chart me-2"></i>Market Penetration Goals</h6>
              </div>
              <div class="card-body">
                <div class="text-center mb-3">
                  <h4 class="text-info">{{ demographicsData.marketPenetration.totalTargetFamilies.toLocaleString() }}</h4>
                  <p class="mb-0">Total Target Families</p>
                </div>

                <div v-for="goal in demographicsData.marketPenetration.goals" :key="goal.year" class="mb-3">
                  <h6>{{ goal.year }}</h6>
                  <div class="progress mb-2">
                    <div :class="`progress-bar bg-${goal.color}`" :style="`width: ${goal.percentage}%`"></div>
                  </div>
                  <small>{{ goal.families }} families ({{ goal.percentage }}% market share)</small>
                </div>

                <div class="alert alert-light">
                  <small><strong>Strategy:</strong> {{ demographicsData.marketPenetration.strategy }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Location Benefits -->
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-map me-2"></i>Location Advantages</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-primary">Strategic Benefits</h6>
                    <ul>
                      <li>
                        <strong>Central Location:</strong> Easy access from all Fort Smith areas
                      </li>
                      <li><strong>Major Routes:</strong> Near I-540 and US-71</li>
                      <li><strong>Business District:</strong> Close to major employers</li>
                      <li>
                        <strong>Residential Areas:</strong> Surrounded by family neighborhoods
                      </li>
                      <li><strong>Parking:</strong> Ample free parking available</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-primary">Within 5-Mile Radius</h6>
                    <div class="row">
                      <div class="col-6"><strong>Population:</strong></div>
                      <div class="col-6">65,000+</div>
                    </div>
                    <div class="row">
                      <div class="col-6"><strong>Families:</strong></div>
                      <div class="col-6">8,200+</div>
                    </div>
                    <div class="row">
                      <div class="col-6"><strong>Children 0-12:</strong></div>
                      <div class="col-6">12,500+</div>
                    </div>
                    <div class="row">
                      <div class="col-6"><strong>Avg. Income:</strong></div>
                      <div class="col-6">$58,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Demographics Charts -->
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-pie-chart me-2"></i>Target Market Distribution</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="targetMarketData"
                  :chartOptions="chartOptions"
                  chartType="doughnut"
                  chartId="target-market-chart"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-bar-chart me-2"></i>Market Penetration Goals</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="marketPenetrationData"
                  :chartOptions="chartOptions"
                  chartType="bar"
                  chartId="market-penetration-chart"
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
  import { targetMarketData, marketPenetrationData } from '@/data/demographicsData.js'
  import demographicsData from '@/data/demographicsData.json'

  export default {
    name: 'DemographicsPage',
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
        targetMarketData: targetMarketData,
        marketPenetrationData: marketPenetrationData,
        demographicsData: demographicsData,
      }
    },
  }
</script>
