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
              <div class="card-header">
                <h5><i class="bi bi-speedometer2 me-2"></i>Business Launch Progress Overview</h5>
              </div>
              <div class="card-body">
                <div class="row text-center">
                  <div v-for="phase in phases" :key="phase.phase" class="col-md-2">
                    <h6>{{ phase.phase }}</h6>
                    <div class="progress mb-2">
                      <div
                        :class="`progress-bar bg-${getPhaseStatusColor(phase)}`"
                        :style="`width: ${phase.percentage}%`"
                      ></div>
                    </div>
                    <small :class="`text-${getPhaseStatusColor(phase)}`"
                      >{{ phase.percentage }}% Complete</small
                    >
                  </div>
                </div>

                <div class="alert alert-info mt-3">
                  <strong>Overall Progress:</strong> {{ calculatedOverallProgress }}% complete -
                  Currently in {{ overallProgress.currentPhase }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dynamic Phase Cards -->
        <div class="row mb-4" v-for="(phase, phaseIndex) in phases" :key="phase.phase">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h6>
                  <i class="bi bi-clipboard-check me-2"></i>{{ phase.phase }}
                  <span :class="`text-${getPhaseStatusColor(phase)} ms-2`">{{
                    getPhaseStatusText(phase)
                  }}</span>
                </h6>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <ul class="list-unstyled">
                      <li
                        v-for="(task, taskIndex) in phase.tasks"
                        :key="task.task"
                        class="mb-2 d-flex align-items-center"
                        style="cursor: pointer"
                        @click="toggleTask(phaseIndex, taskIndex)"
                      >
                        <i
                          :class="getTaskIcon(task) + ' me-3'"
                          style="font-size: 1.1rem; min-width: 20px"
                        ></i>
                        <span
                          :class="
                            task.status === 'completed'
                              ? 'text-decoration-line-through text-muted'
                              : ''
                          "
                          class="flex-grow-1"
                        >
                          {{ task.task }}
                        </span>
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
  import progressData from '@/data/progressData.json'

  export default {
    name: 'ProgressPage',
    data() {
      return {
        ...progressData,
      }
    },
    computed: {
      // Calculate overall progress based on completed tasks
      calculatedOverallProgress() {
        const allTasks = this.phases.flatMap((phase) => phase.tasks)
        const completedTasks = allTasks.filter((task) => task.status === 'completed')
        return Math.round((completedTasks.length / allTasks.length) * 100)
      },
    },
    methods: {
      toggleTask(phaseIndex, taskIndex) {
        const task = this.phases[phaseIndex].tasks[taskIndex]
        if (task.status === 'completed') {
          task.status = 'pending'
        } else {
          task.status = 'completed'
        }

        // Update phase progress
        this.updatePhaseProgress(phaseIndex)

        // Update overall progress
        this.overallProgress.completedPercentage = this.calculatedOverallProgress

        // Update current phase
        this.updateCurrentPhase()
      },

      updatePhaseProgress(phaseIndex) {
        const phase = this.phases[phaseIndex]
        const completedTasks = phase.tasks.filter((task) => task.status === 'completed')
        phase.percentage = Math.round((completedTasks.length / phase.tasks.length) * 100)

        // Update phase status based on progress
        if (phase.percentage === 0) {
          phase.status = 'pending'
        } else if (phase.percentage === 100) {
          phase.status = 'completed'
        } else {
          phase.status = 'in-progress'
        }
      },

      updateCurrentPhase() {
        // Find the current phase (first non-completed phase or last phase if all completed)
        const currentPhase =
          this.phases.find((phase) => phase.status !== 'completed') ||
          this.phases[this.phases.length - 1]
        this.overallProgress.currentPhase = currentPhase.phase
      },

      getTaskIcon(task) {
        switch (task.status) {
          case 'completed':
            return 'bi-check-square-fill text-success'
          case 'in-progress':
            return 'bi-dash-square text-warning'
          default:
            return 'bi-square text-muted'
        }
      },

      getPhaseStatusColor(phase) {
        if (phase.percentage === 100) return 'success'
        if (phase.percentage > 0) return 'warning'
        return 'danger'
      },

      getPhaseStatusText(phase) {
        if (phase.percentage === 100) return '✓'
        if (phase.percentage > 0) return '⏳'
        return '❌'
      },
    },
  }
</script>
