<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-house-door me-2"></i>Business Overview</h5>
      </div>
      <div class="card-body">
        <!-- Executive Summary -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card border-primary">
              <div class="card-header bg-primary text-white">
                <h5><i class="bi bi-star me-2"></i>Executive Summary</h5>
              </div>
              <div class="card-body">
                <h6 class="text-primary">{{ executiveSummary.businessName }}</h6>
                <p>
                  {{ executiveSummary.description }}
                </p>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <h6 class="text-primary">Mission Statement</h6>
                    <p class="text-muted">
                      {{ executiveSummary.mission }}
                    </p>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-primary">Vision</h6>
                    <p class="text-muted">
                      {{ executiveSummary.vision }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Success Factors -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-trophy me-2"></i>Key Success Factors</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div v-for="factor in keySuccessFactors" :key="factor.title" class="col-md-3">
                    <div class="text-center">
                      <i :class="`${factor.icon} text-${factor.color}`" style="font-size: 2rem"></i>
                      <h6 class="mt-2">{{ factor.title }}</h6>
                      <p class="text-muted small">{{ factor.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Business Model -->
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="card border-success">
              <div class="card-header bg-success text-white">
                <h6><i class="bi bi-graph-up me-2"></i>Business Model</h6>
              </div>
              <div class="card-body">
                <h6 class="text-success">Revenue Streams</h6>
                <ul class="list-unstyled">
                  <li v-for="stream in businessModel.revenueStreams" :key="stream">
                    <i class="bi bi-check text-success me-2"></i>{{ stream }}
                  </li>
                </ul>

                <h6 class="text-success mt-3">Target Market</h6>
                <ul class="list-unstyled">
                  <li v-for="target in businessModel.targetMarket" :key="target">
                    <i class="bi bi-arrow-right text-success me-2"></i>{{ target }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card border-info">
              <div class="card-header bg-info text-white">
                <h6><i class="bi bi-bullseye me-2"></i>Market Opportunity</h6>
              </div>
              <div class="card-body">
                <h6 class="text-info">Fort Smith Demographics</h6>
                <ul class="list-unstyled">
                  <li>
                    <strong>Population:</strong>
                    {{ marketOpportunity.demographics.population }}
                  </li>
                  <li>
                    <strong>Households with Children:</strong>
                    {{ marketOpportunity.demographics.householdsWithChildren }}
                  </li>
                  <li>
                    <strong>Median Income:</strong>
                    {{ marketOpportunity.demographics.medianIncome }}
                  </li>
                  <li>
                    <strong>Working Parents:</strong>
                    {{ marketOpportunity.demographics.workingParents }}
                  </li>
                </ul>

                <h6 class="text-info mt-3">Market Gap</h6>
                <p class="text-muted">
                  {{ marketOpportunity.marketGap }}
                </p>

                <div class="alert alert-info">
                  <small> <strong>Market Size:</strong> {{ marketOpportunity.marketSize }} </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Management Team -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-person-badge me-2"></i>Management & Operations</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="text-primary">{{ managementTeam.structure.title }}</h6>
                    <ul class="list-unstyled">
                      <li v-for="role in managementTeam.structure.roles" :key="role">
                        <strong>{{ role.split(':')[0] }}:</strong> {{ role.split(':')[1] }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-primary">{{ managementTeam.qualifications.title }}</h6>
                    <ul class="list-unstyled">
                      <li
                        v-for="qualification in managementTeam.qualifications.items"
                        :key="qualification"
                      >
                        <i class="bi bi-check text-success me-2"></i>{{ qualification }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-primary">{{ managementTeam.operations.title }}</h6>
                    <ul class="list-unstyled">
                      <li v-for="operation in managementTeam.operations.items" :key="operation">
                        <strong>{{ operation.split(':')[0] }}:</strong>
                        {{ operation.split(':')[1] }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Financial Highlights -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card border-success">
              <div class="card-header bg-success text-white">
                <h6><i class="bi bi-currency-dollar me-2"></i>Financial Highlights</h6>
              </div>
              <div class="card-body">
                <div class="row text-center">
                  <div class="col-md-3">
                    <h6>{{ financialHighlights.metrics.startupInvestment.label }}</h6>
                    <h4 class="text-primary">
                      {{ financialHighlights.metrics.startupInvestment.value }}
                    </h4>
                    <small class="text-muted">{{
                      financialHighlights.metrics.startupInvestment.description
                    }}</small>
                  </div>
                  <div class="col-md-3">
                    <h6>{{ financialHighlights.metrics.monthlyRevenue.label }}</h6>
                    <h4 class="text-success">
                      {{ financialHighlights.metrics.monthlyRevenue.value }}
                    </h4>
                    <small class="text-muted">{{
                      financialHighlights.metrics.monthlyRevenue.description
                    }}</small>
                  </div>
                  <div class="col-md-3">
                    <h6>{{ financialHighlights.metrics.monthlyProfit.label }}</h6>
                    <h4 class="text-success">
                      {{ financialHighlights.metrics.monthlyProfit.value }}
                    </h4>
                    <small class="text-muted">{{
                      financialHighlights.metrics.monthlyProfit.description
                    }}</small>
                  </div>
                  <div class="col-md-3">
                    <h6>{{ financialHighlights.metrics.breakEven.label }}</h6>
                    <h4 class="text-info">{{ financialHighlights.metrics.breakEven.value }}</h4>
                    <small class="text-muted">{{
                      financialHighlights.metrics.breakEven.description
                    }}</small>
                  </div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-success">{{ financialHighlights.projections.title }}</h6>
                    <ul class="list-unstyled">
                      <li
                        v-for="projection in financialHighlights.projections.items"
                        :key="projection"
                      >
                        <strong>{{ projection.split(':')[0] }}:</strong>
                        {{ projection.split(':')[1] }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-success">{{ financialHighlights.returns.title }}</h6>
                    <ul class="list-unstyled">
                      <li v-for="returnItem in financialHighlights.returns.items" :key="returnItem">
                        <strong>{{ returnItem.split(':')[0] }}:</strong>
                        {{ returnItem.split(':')[1] }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Implementation Timeline -->
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-calendar-check me-2"></i>Implementation Timeline</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div
                    v-for="phase in implementationTimeline.phases"
                    :key="phase.name"
                    class="col-md-3"
                  >
                    <div class="card bg-light">
                      <div class="card-body text-center">
                        <h6 :class="`text-${phase.color}`">{{ phase.name }}</h6>
                        <p class="small">{{ phase.timeline }}</p>
                        <ul class="list-unstyled small">
                          <li v-for="task in phase.tasks" :key="task">
                            {{ task }}
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

        <!-- Business Overview Charts -->
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-graph-up me-2"></i>Revenue Growth Projection</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="growthChartData"
                  :chartOptions="chartOptions"
                  chartType="line"
                  chartId="growth-chart"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-pie-chart me-2"></i>Investment Breakdown</h6>
              </div>
              <div class="card-body">
                <FinancialChart
                  :chartData="investmentChartData"
                  :chartOptions="chartOptions"
                  chartType="doughnut"
                  chartId="investment-chart"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Fallback Content -->
        <div class="mt-4">
          <h6>{{ businessPlanSections.title }}</h6>
          <div class="row">
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li
                  v-for="section in businessPlanSections.leftColumn"
                  :key="section"
                  class="list-group-item"
                >
                  {{ section }}
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li
                  v-for="section in businessPlanSections.rightColumn"
                  :key="section"
                  class="list-group-item"
                >
                  {{ section }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FinancialChart from '@/components/FinancialChart.vue'
  import { annualGrowthData, startupInvestmentData } from '@/data/financialData.js'
  import overviewData from '@/data/overviewData.json'

  export default {
    name: 'OverviewPage',
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
        growthChartData: annualGrowthData,
        investmentChartData: startupInvestmentData,
        ...overviewData,
      }
    },
  }
</script>
