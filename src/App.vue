<template>
  <div id="app">
    <!-- Sidebar -->
    <nav id="sidebar" class="sidebar" :class="{ collapsed: sidebarCollapsed }">
      <div class="sidebar-header">
        <div v-show="!sidebarCollapsed" class="d-flex align-items-center">
          <img
            src="@/assets/logo.jpg"
            alt="Logo"
            class="logo me-2"
            style="width: 40px; height: 40px; object-fit: contain"
          />
          <h4 class="mb-0">Business Plan</h4>
        </div>
        <div v-show="sidebarCollapsed" class="text-center w-100">
          <img
            src="@/assets/logo.jpg"
            alt="Logo"
            class="logo"
            style="width: 30px; height: 30px; object-fit: contain"
          />
        </div>
        <button class="btn btn-sm btn-outline-light toggle-btn" @click="toggleSidebar">
          <i :class="sidebarCollapsed ? 'bi bi-chevron-right' : 'bi bi-chevron-left'"></i>
        </button>
      </div>

      <ul class="nav nav-pills flex-column">
        <li class="nav-item" v-for="item in menuItems" :key="item.id">
          <router-link
            :to="item.route"
            class="nav-link"
            :class="{ active: $route.name === item.id }"
            :title="item.title"
          >
            <i :class="item.icon"></i>
            <span v-show="!sidebarCollapsed" class="nav-text">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <main id="main-content" :class="{ expanded: sidebarCollapsed }">
      <!-- Header -->
      <header class="header-matched p-3 mb-4">
        <div class="container-fluid">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <img
                src="@/assets/logo.jpg"
                alt="Logo"
                class="me-3"
                style="width: 50px; height: 50px; object-fit: contain"
              />
              <div>
                <h1 class="h3 mb-0">{{ getCurrentPageTitle() }}</h1>
                <small class="text-light">Fort Smith, AR Daycare Business Plan</small>
              </div>
            </div>
            <i class="bi bi-printer text-light" style="cursor: pointer; font-size: 1.5rem;" title="Print" @click="printPage"></i>
          </div>
        </div>
      </header>

      <!-- Router View -->
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap-icons/font/bootstrap-icons.css'
  import { generateBusinessPlanPDF, generateCurrentPagePDF } from '@/utils/pdfGenerator'

  export default {
    name: 'App',
    data() {
      return {
        sidebarCollapsed: false,
        menuItems: [
          {
            id: 'overview',
            title: 'Business Overview',
            icon: 'bi bi-house-door',
            route: '/',
          },
          {
            id: 'demographics',
            title: 'Demographics',
            icon: 'bi bi-graph-up',
            route: '/demographics',
          },
          {
            id: 'services',
            title: 'Products & Services',
            icon: 'bi bi-heart',
            route: '/services',
          },
          {
            id: 'financial',
            title: 'Financial Projections',
            icon: 'bi bi-calculator',
            route: '/financial',
          },
          {
            id: 'startup',
            title: 'Startup Costs',
            icon: 'bi bi-cash-stack',
            route: '/startup',
          },
          {
            id: 'progress',
            title: 'Progress Checklist',
            icon: 'bi bi-check2-square',
            route: '/progress',
          },
        ],
      }
    },
    methods: {
      toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed
      },
      getCurrentPageTitle() {
        const currentRoute = this.$route.name
        const menuItem = this.menuItems.find((item) => item.id === currentRoute)
        return menuItem ? menuItem.title : 'Daycare Business Plan'
      },
      async printPage() {
        try {
          // Show loading indicator
          const originalText = 'Print'
          const printIcon = document.querySelector('.bi-printer')
          if (printIcon) {
            printIcon.style.opacity = '0.5'
            printIcon.title = 'Generating PDF...'
          }

          // Ask user which type of PDF they want
          const generateComplete = confirm(
            'Do you want to generate a complete business plan PDF with all pages?\n\n' +
            'Click "OK" for complete PDF (takes longer)\n' +
            'Click "Cancel" for current page only (faster)'
          )

          let result
          if (generateComplete) {
            result = await generateBusinessPlanPDF()
          } else {
            generateCurrentPagePDF()
            result = { success: true, message: 'Current page PDF generated!' }
          }

          // Reset loading indicator
          if (printIcon) {
            printIcon.style.opacity = '1'
            printIcon.title = 'Print'
          }

          // Show result message
          if (result.success) {
            alert(result.message)
          } else {
            alert('Error: ' + result.message)
          }

        } catch (error) {
          console.error('Print error:', error)
          alert('Error generating PDF: ' + error.message)

          // Reset loading indicator
          const printIcon = document.querySelector('.bi-printer')
          if (printIcon) {
            printIcon.style.opacity = '1'
            printIcon.title = 'Print'
          }
        }
      },
    },
  }
</script>

<style>
  /* Import custom styles */
  @import './assets/styles/main.css';
</style>
