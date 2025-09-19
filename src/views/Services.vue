<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-heart me-2"></i>Drop-In Childcare Services</h5>
      </div>
      <div class="card-body">
        <!-- Service Overview -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="alert alert-info">
              <h6><i class="bi bi-star me-2"></i>Kids Zone - Flexible Drop-In Childcare</h6>
              <p class="mb-0">
                Professional hourly childcare services for busy families in Fort Smith, AR. No
                reservations required - just drop in!
              </p>
            </div>
          </div>
        </div>

        <!-- Pricing Cards -->
        <div class="row mb-4">
          <div class="col-md-4" v-for="service in serviceOfferings" :key="service.title">
            <div class="card" :class="`border-${service.color}`">
              <div
                class="card-header"
                :class="`bg-${service.color}`"
                style="color: black !important"
              >
                <h6 style="color: black !important; margin: 0">
                  <i :class="`${service.icon} me-2`"></i>{{ service.title }}
                </h6>
              </div>
              <div class="card-body">
                <p class="text-muted mb-2">{{ service.description }}</p>
                <div class="pricing-details">
                  <!-- For Drop-In Care Services -->
                  <div v-if="service.pricing.ages18monthsTo12years">
                    <div class="mb-2">
                      <strong class="text-dark">Ages 18 months-12 years:</strong>
                      <span class="text-dark ms-2">{{
                        service.pricing.ages18monthsTo12years
                      }}</span>
                    </div>
                    <div class="mb-2">
                      <strong class="text-dark">Additional children:</strong>
                      <span class="text-dark ms-2">{{ service.pricing.additionalChildren }}</span>
                    </div>
                    <div class="mb-2">
                      <strong class="text-dark">Registration:</strong>
                      <span class="text-dark ms-2">{{ service.pricing.registrationFee }}</span>
                    </div>
                  </div>

                  <!-- For Block Plans -->
                  <div v-if="service.pricing.smallBlock">
                    <div class="mb-2">
                      <strong class="text-dark">Small Block:</strong>
                      <span class="text-dark ms-2">{{ service.pricing.smallBlock }}</span>
                    </div>
                    <div class="mb-2">
                      <strong class="text-dark">Large Block:</strong>
                      <span class="text-dark ms-2">{{ service.pricing.largeBlock }}</span>
                    </div>
                    <div class="mb-2">
                      <strong class="text-dark">Eligibility:</strong>
                      <span class="text-dark ms-2">{{ service.pricing.eligibility }}</span>
                    </div>
                    <div class="mb-2">
                      <strong class="text-dark">Rates:</strong>
                      <span class="text-dark ms-2">{{ service.pricing.rates }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Age Groups -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card border-success">
              <div class="card-header bg-success" style="color: black !important">
                <h6 style="color: black !important; margin: 0">
                  <i class="bi bi-people me-2"></i>Age Groups We Serve
                </h6>
              </div>
              <div class="card-body">
                <div class="row justify-content-center">
                  <div v-for="group in ageGroups" :key="group.group" class="col-md-5 col-lg-4 mb-3">
                    <div class="text-center">
                      <h6 class="text-success">{{ group.group }}</h6>
                      <p class="text-muted">{{ group.ageRange }}</p>
                      <small class="badge bg-light text-dark"
                        >Max {{ group.capacity }} children</small
                      >
                      <br />
                      <small class="text-muted">Staff ratio: {{ group.ratio }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Operating Hours -->
        <div class="row mb-4">
          <div class="col-md-8">
            <div class="card border-info">
              <div class="card-header bg-info" style="color: black !important">
                <h6 style="color: black !important; margin: 0">
                  <i class="bi bi-calendar-week me-2"></i>Operating Hours
                </h6>
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <td><strong>Wednesday - Thursday</strong></td>
                      <td>{{ hoursOfOperation.wednesday }}</td>
                    </tr>
                    <tr>
                      <td><strong>Friday - Saturday</strong></td>
                      <td>{{ hoursOfOperation.friday }}</td>
                    </tr>
                    <tr>
                      <td><strong>Sunday</strong></td>
                      <td>{{ hoursOfOperation.sunday }}</td>
                    </tr>
                    <tr>
                      <td><strong>Monday - Tuesday</strong></td>
                      <td class="text-muted">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-warning">
              <div class="card-header bg-warning" style="color: black !important">
                <h6 style="color: black !important; margin: 0">
                  <i class="bi bi-info-circle me-2"></i>Quick Info
                </h6>
              </div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li><i class="bi bi-check text-success me-2"></i>{{ policies.dropIn }}</li>
                  <li><i class="bi bi-check text-success me-2"></i>Ages {{ policies.ageRange }}</li>
                  <li><i class="bi bi-check text-success me-2"></i>{{ policies.payment }}</li>
                  <li><i class="bi bi-check text-success me-2"></i>{{ policies.ratios }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Membership Benefits -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header" style="background-color: #6c757d; color: black !important">
                <h6 style="color: black !important; margin: 0">
                  <i class="bi bi-star me-2"></i>Pricing Comparison: Registered vs Non-Registered
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-success">Registered Member Benefits</h6>
                    <ul class="list-unstyled">
                      <li>
                        <i class="bi bi-check text-success me-2"></i
                        >{{ policies.membership.registered }}
                      </li>
                      <li>
                        <i class="bi bi-check text-success me-2"></i>Lower rate: $14/hr (18mo-12yrs)
                      </li>
                      <li>
                        <i class="bi bi-check text-success me-2"></i>Additional children: $8/hour
                        each
                      </li>
                      <li>
                        <i class="bi bi-check text-success me-2"></i>Block plans with 15-20% bonus
                        credits
                      </li>
                      <li>
                        <i class="bi bi-check text-success me-2"></i>$40/year registration fee
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-warning">Non-Registered (Walk-In)</h6>
                    <ul class="list-unstyled">
                      <li>
                        <i class="bi bi-arrow-right text-warning me-2"></i
                        >{{ policies.membership.nonRegistered }}
                      </li>
                      <li>
                        <i class="bi bi-arrow-right text-warning me-2"></i>Standard rate: $16/hr
                        (18mo-12yrs)
                      </li>
                      <li>
                        <i class="bi bi-arrow-right text-warning me-2"></i>No additional children
                        discount
                      </li>
                      <li>
                        <i class="bi bi-arrow-right text-warning me-2"></i>No block plan bonuses
                        available
                      </li>
                      <li>
                        <i class="bi bi-arrow-right text-warning me-2"></i>No registration required
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Simple Policies -->
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header" style="background-color: #6c757d; color: black !important">
                <h6 style="color: black !important; margin: 0">
                  <i class="bi bi-clipboard-check me-2"></i>Our Simple Policies
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <ul class="list-unstyled">
                      <li v-for="policy in policies.policies" :key="policy" class="mb-2">
                        <i class="bi bi-arrow-right text-info me-2"></i>{{ policy }}
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
  </div>
</template>

<script>
  import servicesData from '@/data/servicesData.json'

  export default {
    name: 'ServicesPage',
    data() {
      return {
        ...servicesData,
      }
    },
  }
</script>
