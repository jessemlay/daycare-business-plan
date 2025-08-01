<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-puzzle me-2"></i>Products & Services</h5>
      </div>
      <div class="card-body">
        <!-- Service Categories -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="alert alert-info">
              <h6>
                <i class="bi bi-star me-2"></i>KidZone Sprouts - Comprehensive Childcare Services
              </h6>
              <p class="mb-0">
                Professional drop-in daycare services designed for busy families in Fort Smith, AR
              </p>
            </div>
          </div>
        </div>

        <!-- Primary Services -->
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="card border-primary">
              <div class="card-header bg-primary text-white">
                <h6><i class="bi bi-clock me-2"></i>Flexible Care Options</h6>
              </div>
              <div class="card-body">
                <div
                  v-for="service in serviceOfferings"
                  :key="service.title"
                  class="service-item mb-3"
                >
                  <h6 :class="`text-${service.color}`">
                    <i :class="`${service.icon} me-2`"></i>{{ service.title }}
                  </h6>
                  <p class="text-muted mb-1">{{ service.description }}</p>
                  <span :class="`badge bg-${service.color}`">{{ service.pricing.daily }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card border-success">
              <div class="card-header bg-success text-white">
                <h6><i class="bi bi-heart me-2"></i>Age Groups Served</h6>
              </div>
              <div class="card-body">
                <div v-for="group in ageGroups" :key="group.group" class="age-group mb-3">
                  <h6 class="text-success">{{ group.group }} ({{ group.ageRange }})</h6>
                  <p class="text-muted small">
                    {{ group.features[0] }} • Capacity: {{ group.capacity }} • Ratio
                    {{ group.ratio }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Services -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-plus-circle me-2"></i>Additional Services & Features</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="text-primary">Educational Activities</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-check text-success me-2"></i>Age-appropriate learning</li>
                      <li><i class="bi bi-check text-success me-2"></i>Arts and crafts</li>
                      <li><i class="bi bi-check text-success me-2"></i>Story time</li>
                      <li><i class="bi bi-check text-success me-2"></i>Music and movement</li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-primary">Meals & Nutrition</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-check text-success me-2"></i>Healthy snacks provided</li>
                      <li><i class="bi bi-check text-success me-2"></i>Lunch program available</li>
                      <li>
                        <i class="bi bi-check text-success me-2"></i>Special dietary accommodations
                      </li>
                      <li><i class="bi bi-check text-success me-2"></i>Nutrition education</li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-primary">Safety & Security</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-check text-success me-2"></i>Licensed facility</li>
                      <li><i class="bi bi-check text-success me-2"></i>Background-checked staff</li>
                      <li><i class="bi bi-check text-success me-2"></i>Secure entry system</li>
                      <li><i class="bi bi-check text-success me-2"></i>Emergency procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Operating Hours -->
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="card border-info">
              <div class="card-header bg-info text-white">
                <h6><i class="bi bi-calendar-week me-2"></i>Operating Hours</h6>
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <td><strong>Monday - Friday</strong></td>
                      <td>6:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <td><strong>Saturday</strong></td>
                      <td>7:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td><strong>Sunday</strong></td>
                      <td>8:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                      <td><strong>Holidays</strong></td>
                      <td>Limited hours (call ahead)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card border-warning">
              <div class="card-header bg-warning text-dark">
                <h6><i class="bi bi-exclamation-triangle me-2"></i>Policies & Requirements</h6>
              </div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li>
                    <i class="bi bi-arrow-right text-warning me-2"></i>Current immunization records
                    required
                  </li>
                  <li>
                    <i class="bi bi-arrow-right text-warning me-2"></i>24-hour advance notice
                    preferred
                  </li>
                  <li>
                    <i class="bi bi-arrow-right text-warning me-2"></i>Emergency contact information
                    mandatory
                  </li>
                  <li>
                    <i class="bi bi-arrow-right text-warning me-2"></i>Payment due at time of
                    service
                  </li>
                  <li>
                    <i class="bi bi-arrow-right text-warning me-2"></i>Cancellation policy: 4 hours
                    notice
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Target Customers -->
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-people me-2"></i>Our Target Customers</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <div class="text-center">
                      <i class="bi bi-briefcase text-primary" style="font-size: 2rem"></i>
                      <h6 class="mt-2">Working Parents</h6>
                      <p class="text-muted small">Professionals needing reliable childcare</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="text-center">
                      <i class="bi bi-calendar-event text-success" style="font-size: 2rem"></i>
                      <h6 class="mt-2">Event Attendees</h6>
                      <p class="text-muted small">Parents attending meetings, appointments</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="text-center">
                      <i class="bi bi-house text-warning" style="font-size: 2rem"></i>
                      <h6 class="mt-2">Stay-at-Home Parents</h6>
                      <p class="text-muted small">Need occasional respite care</p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="text-center">
                      <i class="bi bi-airplane text-info" style="font-size: 2rem"></i>
                      <h6 class="mt-2">Travelers</h6>
                      <p class="text-muted small">Visitors needing temporary childcare</p>
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
