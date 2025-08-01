import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import router from '@/router'

class BusinessPlanPDFGenerator {
  constructor() {
    this.pdf = null
    this.pageHeight = 297 // A4 height in mm
    this.pageWidth = 210 // A4 width in mm
    this.margin = 15
    this.currentY = this.margin
    this.pages = [
      { route: '/', title: 'Business Overview' },
      { route: '/demographics', title: 'Demographics' },
      { route: '/services', title: 'Products & Services' },
      { route: '/financial', title: 'Financial Projections' },
      { route: '/startup', title: 'Startup Costs' },
      { route: '/progress', title: 'Progress Checklist' },
    ]
  }

  async generateCompletePDF() {
    try {
      this.pdf = new jsPDF('p', 'mm', 'a4')

      // Add title page (includes page break)
      await this.addTitlePage()

      // Process each page
      for (let i = 0; i < this.pages.length; i++) {
        const page = this.pages[i]
        console.log(`Processing page: ${page.title}`)

        await this.addPageToPDF(page)

        // Add page break if not the last page
        if (i < this.pages.length - 1) {
          this.pdf.addPage()
        }
      }

      // Save the PDF
      const fileName = `Kids_Zone_Business_Plan_${new Date().toISOString().split('T')[0]}.pdf`
      this.pdf.save(fileName)

      return true
    } catch (error) {
      console.error('Error generating PDF:', error)
      throw error
    }
  }

  async addTitlePage() {
    // Add logo at the very top
    this.currentY = 30 // Start higher up for logo

    try {
      // Load logo directly from assets
      await this.addLogoToPDF()
    } catch (error) {
      console.error('Error adding logo:', error)
      // If logo loading fails, just add some space
      this.currentY += 40
    }

    // Main title
    this.pdf.setFontSize(28)
    this.pdf.setFont('helvetica', 'bold')
    this.pdf.text('Kids Zone', this.pageWidth / 2, this.currentY, { align: 'center' })
    this.currentY += 15

    this.pdf.setFontSize(20)
    this.pdf.text('Drop-In Childcare Business Plan', this.pageWidth / 2, this.currentY, { align: 'center' })
    this.currentY += 25

    // Owner information
    this.pdf.setFontSize(14)
    this.pdf.setFont('helvetica', 'bold')
    this.pdf.text('Owners: Jesse Lay & Ermenia Lay', this.pageWidth / 2, this.currentY, { align: 'center' })
    this.currentY += 12

    this.pdf.setFontSize(12)
    this.pdf.setFont('helvetica', 'normal')
    this.pdf.text('Phone: 512-705-7168', this.pageWidth / 2, this.currentY, { align: 'center' })
    this.currentY += 10

    this.pdf.text('Email: eduenas@gmail.com', this.pageWidth / 2, this.currentY, { align: 'center' })
    this.currentY += 20

    // Location
    this.pdf.setFontSize(14)
    this.pdf.setFont('helvetica', 'normal')
    this.pdf.text('Fort Smith, Arkansas', this.pageWidth / 2, this.currentY, { align: 'center' })
    this.currentY += 30

    // Table of contents - moved up more and centered (removed Generated date)
    this.pdf.setFontSize(16)
    this.pdf.setFont('helvetica', 'bold')
    this.pdf.text('Table of Contents', this.pageWidth / 2, this.currentY, { align: 'center' })
    this.currentY += 15

    this.pdf.setFontSize(12)
    this.pdf.setFont('helvetica', 'normal')
    this.pages.forEach((page, index) => {
      this.pdf.text(`${index + 1}. ${page.title}`, this.pageWidth / 2, this.currentY, { align: 'center' })
      this.currentY += 8
    })

    // Add page break after title page
    this.pdf.addPage()
    this.currentY = this.margin
  }

  async addLogoToPDF() {
    return new Promise((resolve) => {
      // Try to get the logo from an existing img element in the DOM first
      const existingImg = document.querySelector('img[src*="logo.jpg"], img[src*="logo.png"]')

      if (existingImg && existingImg.complete && existingImg.naturalWidth > 0) {
        try {
          this.drawLogoFromElement(existingImg)
          resolve()
          return
        } catch (error) {
          // Fall through to try other methods
        }
      }

      // Create new image element to load logo from multiple possible paths
      const img = new Image()
      img.crossOrigin = 'anonymous'

      img.onload = () => {
        try {
          this.drawLogoFromElement(img)
          resolve()
        } catch (error) {
          // If drawing fails, just continue without logo
          this.currentY += 40
          resolve()
        }
      }

      img.onerror = () => {
        // Try next path or give up
        this.tryAlternateLogo(resolve)
      }

      // Try the most common path first
      img.src = './src/assets/logo.jpg'
    })
  }

  tryAlternateLogo(resolve) {
    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      try {
        this.drawLogoFromElement(img)
        resolve()
      } catch (error) {
        this.currentY += 40
        resolve()
      }
    }

    img.onerror = () => {
      // Final attempt with a different approach
      this.tryImportLogo(resolve)
    }

    // Try relative path
    img.src = '../assets/logo.jpg'
  }

  tryImportLogo(resolve) {
    try {
      // Try to use import/require approach
      const logoUrl = require('@/assets/logo.jpg')
      const img = new Image()
      img.crossOrigin = 'anonymous'

      img.onload = () => {
        try {
          this.drawLogoFromElement(img)
          resolve()
        } catch (error) {
          this.currentY += 40
          resolve()
        }
      }

      img.onerror = () => {
        // If all else fails, just add space and continue
        this.currentY += 40
        resolve()
      }

      img.src = logoUrl
    } catch (error) {
      // If require fails, just add space and continue
      this.currentY += 40
      resolve()
    }
  }

  drawLogoFromElement(imgElement) {
    try {
      // Create a canvas to convert the image
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      // Set canvas size based on actual image dimensions
      const imgWidth = imgElement.naturalWidth || imgElement.width || 200
      const imgHeight = imgElement.naturalHeight || imgElement.height || 200

      canvas.width = imgWidth
      canvas.height = imgHeight

      // Draw the logo with white background
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw the actual image
      ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height)

      const logoData = canvas.toDataURL('image/jpeg', 1.0)

      // Verify we have valid image data
      if (logoData && logoData !== 'data:,') {
        // Add logo to PDF (centered) - Triple size from 25mm to 75mm
        const logoSize = 75 // 75mm square (tripled from 25mm)
        const logoX = (this.pageWidth - logoSize) / 2
        this.pdf.addImage(logoData, 'JPEG', logoX, this.currentY, logoSize, logoSize)
        this.currentY += logoSize + 15

        // Debug: confirm logo was added
        console.log('Logo successfully added to PDF')
      } else {
        throw new Error('Invalid logo data')
      }
    } catch (error) {
      console.log('Error drawing logo:', error)
      // If drawing fails, just add space
      this.currentY += 40
    }
  }

  async addPageToPDF(pageInfo) {
    try {
      // Always navigate to the page
      await this.navigateToPage(pageInfo.route)

      // Wait for content to load
      await this.waitForContent()

      // Reset Y position for new page (no title added)
      this.currentY = this.margin

      // Capture the main content area
      const contentElement = document.querySelector('.content-section') ||
                            document.querySelector('main .container-fluid') ||
                            document.querySelector('#main-content')

      if (contentElement) {
        await this.addElementToPDF(contentElement)
      } else {
        // Fallback: capture visible text content
        await this.addTextContentToPDF()
      }

    } catch (error) {
      console.error(`Error processing page ${pageInfo.title}:`, error)

      // Add error message to PDF
      this.pdf.setFontSize(12)
      this.pdf.setFont('helvetica', 'normal')
      this.pdf.text(`Error loading content for ${pageInfo.title}`, this.margin, this.currentY)
      this.currentY += 10
    }
  }

  async navigateToPage(route) {
    return new Promise((resolve) => {
      router.push(route).then(() => {
        // Wait for Vue to update the DOM - reduced from 1000ms to 300ms
        setTimeout(resolve, 300)
      }).catch(() => {
        resolve() // Continue even if navigation fails
      })
    })
  }

  async waitForContent() {
    return new Promise(resolve => {
      // Wait for any charts or dynamic content to load - reduced from 1500ms to 500ms
      setTimeout(resolve, 500)
    })
  }

  async addElementToPDF(element) {
    try {
      // Create canvas from element with better settings for visibility
      const canvas = await html2canvas(element, {
        scale: 4, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        removeContainer: false,
        imageTimeout: 15000,
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        foreignObjectRendering: false,
        onclone: (clonedDoc) => {
          // Force all text to be black and backgrounds to be white
          const allElements = clonedDoc.querySelectorAll('*')
          allElements.forEach((el) => {
            const computedStyle = window.getComputedStyle(el)

            // Set explicit text color to black
            if (el.tagName && !['IMG', 'SVG'].includes(el.tagName)) {
              el.style.setProperty('color', '#000000', 'important')
            }

            // Force background colors for containers
            if (['DIV', 'SECTION', 'MAIN', 'ARTICLE'].includes(el.tagName)) {
              if (!computedStyle.backgroundColor || computedStyle.backgroundColor === 'rgba(0, 0, 0, 0)') {
                el.style.setProperty('background-color', '#ffffff', 'important')
              }
            }

            // Make sure borders are visible
            if (computedStyle.borderWidth && computedStyle.borderWidth !== '0px') {
              el.style.setProperty('border-color', '#333333', 'important')
            }

            // Force visibility for all elements
            el.style.setProperty('opacity', '1', 'important')
            el.style.setProperty('visibility', 'visible', 'important')
          })

          // Set body background
          clonedDoc.body.style.setProperty('background-color', '#ffffff', 'important')
          clonedDoc.body.style.setProperty('color', '#000000', 'important')
        },
      })

      // Calculate dimensions with better scaling for long content
      const maxWidth = this.pageWidth - (this.margin * 2)
      const maxHeight = this.pageHeight - this.currentY - this.margin - 10 // Leave some bottom margin

      let imgWidth = maxWidth
      let imgHeight = (canvas.height * imgWidth) / canvas.width

      // If content is too tall, scale it down to fit
      if (imgHeight > maxHeight) {
        imgHeight = maxHeight
        imgWidth = (canvas.width * imgHeight) / canvas.height
      }

      // Check if image fits on current page, if not add new page
      if (this.currentY + imgHeight > this.pageHeight - this.margin) {
        this.pdf.addPage()
        this.currentY = this.margin

        // Recalculate dimensions for new page
        const newMaxHeight = this.pageHeight - this.currentY - this.margin - 10
        if (imgHeight > newMaxHeight) {
          imgHeight = newMaxHeight
          imgWidth = (canvas.width * imgHeight) / canvas.height
        }
      }

      // Convert to image data with higher quality
      const imgData = canvas.toDataURL('image/jpeg', 1.0) // Use JPEG with max quality
      this.pdf.addImage(imgData, 'JPEG', this.margin, this.currentY, imgWidth, imgHeight, '', 'FAST')
      this.currentY += imgHeight + 10

    } catch (error) {
      console.error('Error converting element to image:', error)
      await this.addTextContentToPDF()
    }
  }

  async addTextContentToPDF() {
    // Fallback method: extract and add text content
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, span, div')
    const textContent = []

    textElements.forEach(el => {
      const text = el.textContent?.trim()
      if (text && text.length > 0 && !textContent.includes(text)) {
        textContent.push(text)
      }
    })

    this.pdf.setFontSize(10)
    this.pdf.setFont('helvetica', 'normal')

    textContent.slice(0, 50).forEach(text => { // Limit to prevent overflow
      if (this.currentY > this.pageHeight - this.margin - 20) {
        this.pdf.addPage()
        this.currentY = this.margin
      }

      const lines = this.pdf.splitTextToSize(text, this.pageWidth - (this.margin * 2))
      this.pdf.text(lines, this.margin, this.currentY)
      this.currentY += lines.length * 5 + 5
    })
  }
}

// Export function to be called from components
export async function generateBusinessPlanPDF() {
  try {
    const generator = new BusinessPlanPDFGenerator()
    await generator.generateCompletePDF()
    return { success: true, message: 'PDF generated successfully!' }
  } catch (error) {
    console.error('PDF Generation failed:', error)
    return { success: false, message: 'Failed to generate PDF: ' + error.message }
  }
}

// Alternative simpler method that captures current state
export function generateCurrentPagePDF() {
  try {
    const pdf = new jsPDF('p', 'mm', 'a4')

    // Add title
    pdf.setFontSize(20)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Kids Zone Business Plan', 105, 30, { align: 'center' })

    // Get current page content
    const contentElement =
      document.querySelector('.content-section') ||
      document.querySelector('#main-content .container-fluid')

    if (contentElement) {
      html2canvas(contentElement, {
        scale: 4, // Higher scale for better quality
        useCORS: true,
        backgroundColor: '#ffffff',
        allowTaint: true,
        logging: false,
        imageTimeout: 15000,
        foreignObjectRendering: false,
        onclone: (clonedDoc) => {
          // Force all text to be black and backgrounds to be white
          const allElements = clonedDoc.querySelectorAll('*')
          allElements.forEach((el) => {
            const computedStyle = window.getComputedStyle(el)

            // Set explicit text color to black
            if (el.tagName && !['IMG', 'SVG'].includes(el.tagName)) {
              el.style.setProperty('color', '#000000', 'important')
            }

            // Force background colors for containers
            if (['DIV', 'SECTION', 'MAIN', 'ARTICLE'].includes(el.tagName)) {
              if (!computedStyle.backgroundColor || computedStyle.backgroundColor === 'rgba(0, 0, 0, 0)') {
                el.style.setProperty('background-color', '#ffffff', 'important')
              }
            }

            // Make sure borders are visible
            if (computedStyle.borderWidth && computedStyle.borderWidth !== '0px') {
              el.style.setProperty('border-color', '#333333', 'important')
            }

            // Force visibility for all elements
            el.style.setProperty('opacity', '1', 'important')
            el.style.setProperty('visibility', 'visible', 'important')
          })

          // Set body background
          clonedDoc.body.style.setProperty('background-color', '#ffffff', 'important')
          clonedDoc.body.style.setProperty('color', '#000000', 'important')
        },
      })
        .then((canvas) => {
          const imgWidth = 180
          const imgHeight = (canvas.height * imgWidth) / canvas.width

          const imgData = canvas.toDataURL('image/jpeg', 1.0)
          pdf.addImage(
            imgData,
            'JPEG',
            15,
            50,
            imgWidth,
            imgHeight,
            '',
            'FAST'
          )

          const fileName = `Kids_Zone_Page_${new Date().toISOString().split('T')[0]}.pdf`
          pdf.save(fileName)
        })
        .catch((error) => {
          console.error('Error generating current page PDF:', error)
          alert('Error generating PDF. Please try again.')
        })
    } else {
      alert('No content found to convert to PDF.')
    }
  } catch (error) {
    console.error('PDF generation error:', error)
    alert('Error generating PDF: ' + error.message)
  }
}
