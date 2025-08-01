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
                Initial investment required to launch KidZone Sprouts drop-in daycare facility
              </p>
            </div>
          </div>
        </div>

        <!-- Major Startup Categories -->
        <div class="row mb-4">
          <div v-for="cost in startupCosts" :key="cost.category" class="col-md-4">
            <div class="card text-center" :class="`border-${cost.color}`">
              <div class="card-body">
                <i class="bi bi-building" :class="`text-${cost.color}`" style="font-size: 2rem"></i>
                <h5 class="mt-2" :class="`text-${cost.color}`">{{ cost.category }}</h5>
                <h4 :class="`text-${cost.color}`">${{ cost.subtotal.toLocaleString() }}</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Detailed Startup Costs -->
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-primary text-white">
                <h6><i class="bi bi-building me-2"></i>Facility & Infrastructure</h6>
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <td>Security deposit (3 months)</td>
                      <td class="text-end fw-bold">$7,500</td>
                    </tr>
                    <tr>
                      <td>Renovation & childproofing</td>
                      <td class="text-end fw-bold">$8,000</td>
                    </tr>
                    <tr>
                      <td>Security system installation</td>
                      <td class="text-end fw-bold">$2,500</td>
                    </tr>
                    <tr>
                      <td>HVAC modifications</td>
                      <td class="text-end fw-bold">$3,000</td>
                    </tr>
                    <tr>
                      <td>Flooring & wall coverings</td>
                      <td class="text-end fw-bold">$2,500</td>
                    </tr>
                    <tr>
                      <td>Outdoor playground setup</td>
                      <td class="text-end fw-bold">$1,500</td>
                    </tr>
                  </tbody>
                  <tfoot class="table-primary">
                    <tr>
                      <th>Subtotal</th>
                      <th class="text-end">$25,000</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-warning text-dark">
                <h6><i class="bi bi-toys me-2"></i>Equipment & Furniture</h6>
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <td>Age-appropriate furniture</td>
                      <td class="text-end fw-bold">$6,000</td>
                    </tr>
                    <tr>
                      <td>Educational toys & materials</td>
                      <td class="text-end fw-bold">$3,500</td>
                    </tr>
                    <tr>
                      <td>Safety equipment & supplies</td>
                      <td class="text-end fw-bold">$2,000</td>
                    </tr>
                    <tr>
                      <td>Kitchen appliances & supplies</td>
                      <td class="text-end fw-bold">$2,500</td>
                    </tr>
                    <tr>
                      <td>Cleaning & sanitizing equipment</td>
                      <td class="text-end fw-bold">$1,500</td>
                    </tr>
                    <tr>
                      <td>Office equipment & software</td>
                      <td class="text-end fw-bold">$3,000</td>
                    </tr>
                  </tbody>
                  <tfoot class="table-warning">
                    <tr>
                      <th>Subtotal</th>
                      <th class="text-end">$18,500</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-info text-white">
                <h6><i class="bi bi-shield-check me-2"></i>Legal & Licensing</h6>
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <td>Business license & permits</td>
                      <td class="text-end fw-bold">$1,500</td>
                    </tr>
                    <tr>
                      <td>Daycare licensing fees</td>
                      <td class="text-end fw-bold">$2,000</td>
                    </tr>
                    <tr>
                      <td>Insurance (first year)</td>
                      <td class="text-end fw-bold">$3,600</td>
                    </tr>
                    <tr>
                      <td>Legal consultation</td>
                      <td class="text-end fw-bold">$1,000</td>
                    </tr>
                    <tr>
                      <td>Background checks & training</td>
                      <td class="text-end fw-bold">$400</td>
                    </tr>
                  </tbody>
                  <tfoot class="table-info">
                    <tr>
                      <th>Subtotal</th>
                      <th class="text-end">$8,500</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-success text-white">
                <h6><i class="bi bi-megaphone me-2"></i>Marketing & Operations</h6>
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <td>Website development</td>
                      <td class="text-end fw-bold">$2,000</td>
                    </tr>
                    <tr>
                      <td>Initial marketing campaign</td>
                      <td class="text-end fw-bold">$1,500</td>
                    </tr>
                    <tr>
                      <td>Signage & branding</td>
                      <td class="text-end fw-bold">$1,000</td>
                    </tr>
                    <tr>
                      <td>Working capital (3 months)</td>
                      <td class="text-end fw-bold">$10,000</td>
                    </tr>
                    <tr>
                      <td>Contingency fund</td>
                      <td class="text-end fw-bold">$3,000</td>
                    </tr>
                  </tbody>
                  <tfoot class="table-success">
                    <tr>
                      <th>Subtotal</th>
                      <th class="text-end">$17,500</th>
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
              <div class="card-header bg-success text-white">
                <h5><i class="bi bi-calculator me-2"></i>Total Startup Investment</h5>
              </div>
              <div class="card-body">
                <div class="row text-center">
                  <div class="col-md-3">
                    <h6>Facility & Infrastructure</h6>
                    <h4 class="text-primary">$25,000</h4>
                  </div>
                  <div class="col-md-3">
                    <h6>Equipment & Supplies</h6>
                    <h4 class="text-warning">$18,500</h4>
                  </div>
                  <div class="col-md-3">
                    <h6>Legal & Licensing</h6>
                    <h4 class="text-info">$8,500</h4>
                  </div>
                  <div class="col-md-3">
                    <h6>Marketing & Operations</h6>
                    <h4 class="text-success">$17,500</h4>
                  </div>
                </div>
                <hr />
                <div class="text-center">
                  <h3 class="text-success">Total Required: $69,500</h3>
                  <p class="text-muted">Recommended: $75,000 (with additional buffer)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Funding Options -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-bank me-2"></i>Potential Funding Sources</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="text-primary">Personal Investment</h6>
                    <p class="text-muted">Owner equity contribution</p>
                    <h5 class="text-success">$30,000</h5>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-primary">Small Business Loan</h6>
                    <p class="text-muted">Bank or SBA financing</p>
                    <h5 class="text-warning">$35,000</h5>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-primary">Equipment Financing</h6>
                    <p class="text-muted">Equipment-specific loans</p>
                    <h5 class="text-info">$10,000</h5>
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
