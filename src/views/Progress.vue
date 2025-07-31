<template>
  <div class="content-section">
    <div class="card">
      <div class="card-header">
        <h5><i class="bi bi-check2-square me-2"></i>Progress Checklist</h5>
      </div>
      <div class="card-body">
        <!-- Progress Overview -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card border-info">
              <div class="card-header bg-info text-white">
                <h5><i class="bi bi-speedometer2 me-2"></i>Business Launch Progress Overview</h5>
              </div>
              <div class="card-body">
                <div class="row text-center">
                  <div class="col-md-3">
                    <h6>Planning Phase</h6>
                    <div class="progress mb-2">
                      <div class="progress-bar bg-success" style="width: 85%"></div>
                    </div>
                    <small class="text-success">85% Complete</small>
                  </div>
                  <div class="col-md-3">
                    <h6>Legal & Licensing</h6>
                    <div class="progress mb-2">
                      <div class="progress-bar bg-warning" style="width: 30%"></div>
                    </div>
                    <small class="text-warning">30% Complete</small>
                  </div>
                  <div class="col-md-3">
                    <h6>Facility Setup</h6>
                    <div class="progress mb-2">
                      <div class="progress-bar bg-danger" style="width: 10%"></div>
                    </div>
                    <small class="text-danger">10% Complete</small>
                  </div>
                  <div class="col-md-3">
                    <h6>Staff & Operations</h6>
                    <div class="progress mb-2">
                      <div class="progress-bar bg-secondary" style="width: 5%"></div>
                    </div>
                    <small class="text-muted">5% Complete</small>
                  </div>
                </div>
                
                <div class="alert alert-info mt-3">
                  <strong>Overall Progress:</strong> 32% complete - Currently in Planning and Initial Licensing phase
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 1: Business Planning & Legal Foundation -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-clipboard-check me-2"></i>Phase 1: Business Planning & Legal Foundation</h6>
                <small class="text-muted">Target Completion: Months 1-2</small>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-success">Business Plan Development ✓</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-check-square text-success me-2"></i>Market research completed</li>
                      <li><i class="bi bi-check-square text-success me-2"></i>Financial projections created</li>
                      <li><i class="bi bi-check-square text-success me-2"></i>Service offerings defined</li>
                      <li><i class="bi bi-check-square text-success me-2"></i>Target market identified</li>
                      <li><i class="bi bi-check-square text-success me-2"></i>Competitive analysis completed</li>
                      <li><i class="bi bi-check-square text-success me-2"></i>Business model finalized</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-warning">Legal Structure & Registration ⏳</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-check-square text-success me-2"></i>Business name selected</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Business entity formation (LLC/Corp)</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Federal Tax ID (EIN) obtained</li>
                      <li><i class="bi bi-square text-muted me-2"></i>State business registration</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Business bank account opened</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Business credit cards obtained</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 2: Licensing & Permits -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-shield-check me-2"></i>Phase 2: Licensing & Permits</h6>
                <small class="text-muted">Target Completion: Months 2-3</small>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-danger">State & Local Licenses ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Arkansas DHS Daycare License</li>
                      <li><i class="bi bi-square text-muted me-2"></i>City of Fort Smith Business License</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Sebastian County Health Permit</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Fire Department Inspection</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Building Code Compliance</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Zoning Compliance Verification</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-danger">Insurance & Legal Requirements ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>General Liability Insurance</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Professional Liability Insurance</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Property Insurance</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Workers' Compensation</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Legal consultation completed</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Contracts and waivers drafted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 3: Location & Facility -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-building me-2"></i>Phase 3: Location & Facility Setup</h6>
                <small class="text-muted">Target Completion: Months 3-5</small>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-danger">Property & Location ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Location scouting and selection</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Lease negotiation and signing</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Property inspection completed</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Utilities setup (electric, water, gas)</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Internet and phone service</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Security system installation</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-danger">Renovations & Setup ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Facility layout and design</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Childproofing and safety measures</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Age-appropriate room setup</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Kitchen and food prep area</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Outdoor play area setup</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Final inspections and approvals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 4: Equipment & Supplies -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-cart me-2"></i>Phase 4: Equipment & Supplies Procurement</h6>
                <small class="text-muted">Target Completion: Months 4-5</small>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="text-danger">Furniture & Equipment ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Child-sized tables and chairs</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Cribs and toddler cots</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Storage cabinets and cubbies</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Play equipment and toys</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Art and craft supplies</li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-danger">Kitchen & Safety ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Refrigerator and microwave</li>
                      <li><i class="bi bi-square text-muted me-2"></i>First aid supplies</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Cleaning supplies</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Fire extinguishers</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Emergency evacuation kit</li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-danger">Technology & Admin ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Computer and POS system</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Childcare management software</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Security cameras</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Communication system</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Office supplies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 5: Staffing & Training -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-people me-2"></i>Phase 5: Staffing & Training</h6>
                <small class="text-muted">Target Completion: Month 5</small>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-danger">Recruitment & Hiring ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Job descriptions created</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Recruitment advertising</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Interview process completed</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Background checks completed</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Reference checks completed</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Employment contracts signed</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-danger">Training & Certification ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>CPR/First Aid certification</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Child development training</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Safety procedures training</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Emergency response drills</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Company policies training</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Customer service training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 6: Marketing & Launch -->
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6><i class="bi bi-megaphone me-2"></i>Phase 6: Marketing & Grand Opening</h6>
                <small class="text-muted">Target Completion: Month 6</small>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <h6 class="text-danger">Marketing Materials ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Logo and brand design</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Website development</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Social media setup</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Brochures and flyers</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Signage installation</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Business cards and materials</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h6 class="text-danger">Launch Activities ❌</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Soft opening with friends/family</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Community outreach events</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Grand opening celebration</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Media and press releases</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Promotional campaigns</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Customer acquisition drive</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Ongoing Operations Checklist -->
        <div class="row">
          <div class="col-md-12">
            <div class="card border-success">
              <div class="card-header bg-success text-white">
                <h6><i class="bi bi-gear me-2"></i>Ongoing Operations Checklist</h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="text-success">Daily Operations</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Daily safety inspections</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Child attendance tracking</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Staff scheduling</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Meal planning and prep</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Activity planning</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Parent communication</li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-success">Weekly Tasks</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Financial reporting</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Staff meetings</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Inventory management</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Marketing activities</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Facility maintenance</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Customer follow-up</li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-success">Monthly Reviews</h6>
                    <ul class="list-unstyled">
                      <li><i class="bi bi-square text-muted me-2"></i>Financial performance</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Staff performance reviews</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Customer satisfaction surveys</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Safety and compliance audit</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Marketing ROI analysis</li>
                      <li><i class="bi bi-square text-muted me-2"></i>Business plan review</li>
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
export default {
  name: 'ProgressPage'
}
</script>
