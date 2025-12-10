# 📝 Test Cases - QA Portfolio Website

## Test Suite Overview

| Suite ID | Suite Name | Total Cases | Priority | Status |
|----------|------------|-------------|----------|--------|
| TS-01 | Smoke Tests | 12 | Critical | ✅ Active |
| TS-02 | Navigation Tests | 25 | High | ✅ Active |
| TS-03 | Theme Toggle Tests | 10 | High | ✅ Active |
| TS-04 | External Links Tests | 15 | High | ✅ Active |
| TS-05 | Responsive Design Tests | 17 | High | ✅ Active |
| TS-06 | Content Validation Tests | 34 | Medium | ✅ Active |
| **TOTAL** | **6 Test Suites** | **126** | - | - |

---

## TS-01: Smoke Tests (Critical Path)

### TC-001: Homepage Load
**Priority**: Critical  
**Type**: Functional  
**File**: `01-smoke-tests.cy.js`

**Objective**: Verify homepage loads successfully

**Preconditions**:
- Dev server is running
- Browser is open

**Test Steps**:
1. Navigate to homepage (/)
2. Wait for page to load completely
3. Verify URL contains "/"
4. Verify navbar is visible

**Expected Result**:
- Page loads without errors
- Navbar displays with logo and navigation links
- No console errors

**Test Data**: N/A

---

### TC-002: All Sections Display
**Priority**: Critical  
**Type**: Functional  
**File**: `01-smoke-tests.cy.js`

**Objective**: Verify all main sections are present

**Test Steps**:
1. Visit homepage
2. Verify Hero section is visible
3. Verify About section is visible
4. Verify Experience section is visible
5. Verify Education section is visible
6. Verify Skills section is visible
7. Verify Projects section is visible
8. Verify Certifications section is visible
9. Verify Contact section is visible
10. Verify Footer is visible

**Expected Result**:
- All 9 sections are visible and rendered correctly

---

### TC-003: Page Title
**Priority**: High  
**Type**: Functional  
**File**: `01-smoke-tests.cy.js`

**Objective**: Verify correct page title

**Test Steps**:
1. Visit homepage
2. Get page title

**Expected Result**:
- Page title is "QA Engineer Portfolio"

---

### TC-004-012: Section-Specific Smoke Tests
*(Detailed test cases for Hero, About, Experience, Education, Skills, Projects, Certifications, Contact, Footer)*

---

## TS-02: Navigation Tests

### TC-013-019: Desktop Navigation
**Priority**: High  
**Type**: Functional  
**File**: `02-navigation-tests.cy.js`

**Test Matrix**:

| TC ID | Section | Expected URL Hash | Expected Visibility |
|-------|---------|-------------------|---------------------|
| TC-013 | About | #about | About section visible |
| TC-014 | Experience | #experience | Experience section visible |
| TC-015 | Education | #education | Education section visible |
| TC-016 | Skills | #skills | Skills section visible |
| TC-017 | Projects | #projects | Projects section visible |
| TC-018 | Certifications | #certifications | Certifications section visible |
| TC-019 | Contact | #contact | Contact section visible |

**Test Steps** (for each):
1. Visit homepage
2. Click navigation link for [Section]
3. Verify URL hash updates to #[section]
4. Verify section is visible in viewport

---

### TC-020: Sequential Navigation
**Priority**: High  
**Type**: Functional  
**File**: `02-navigation-tests.cy.js`

**Objective**: Verify navigation through all sections works

**Test Steps**:
1. Visit homepage
2. For each section in order:
   - Click nav link
   - Verify URL hash
   - Wait for smooth scroll
3. Verify all sections navigated successfully

**Expected Result**:
- All sections can be navigated to in sequence
- Smooth scrolling works
- URL hash updates correctly

---

### TC-021-023: Mobile Navigation
**Priority**: High  
**Type**: Functional  
**File**: `02-navigation-tests.cy.js`

**Viewport**: 375x667 (Mobile)

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-021 | Hamburger Menu Visibility | Menu icon visible on mobile |
| TC-022 | Menu Toggle | Menu opens/closes on click |
| TC-023 | Mobile Navigation | Sections accessible via mobile menu |

---

### TC-024-025: Scroll Navigation
**Priority**: Medium  
**Type**: UI/UX  
**File**: `02-navigation-tests.cy.js`

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-024 | Scroll to Section | Section scrolls into viewport |
| TC-025 | Sticky Navbar | Navbar remains visible while scrolling |

---

## TS-03: Theme Toggle Tests

### TC-026: Theme Toggle Button
**Priority**: High  
**Type**: Functional  
**File**: `03-theme-toggle-tests.cy.js`

**Objective**: Verify theme toggle button is visible

**Test Steps**:
1. Visit homepage
2. Locate theme toggle button
3. Verify button is visible
4. Verify theme icon is visible

**Expected Result**:
- Theme toggle button displays in navbar
- Icon (🌙 or ☀️) is visible

---

### TC-027: Default Theme
**Priority**: High  
**Type**: Functional  
**File**: `03-theme-toggle-tests.cy.js`

**Objective**: Verify default theme is dark

**Test Steps**:
1. Visit homepage (fresh session)
2. Check HTML data-theme attribute
3. Check theme icon

**Expected Result**:
- data-theme attribute is NOT "light"
- Theme icon shows 🌙 (moon)

---

### TC-028-029: Theme Switching
**Priority**: High  
**Type**: Functional  
**File**: `03-theme-toggle-tests.cy.js`

| TC ID | Action | Expected Theme | Expected Icon |
|-------|--------|----------------|---------------|
| TC-028 | Click toggle (from dark) | Light | ☀️ |
| TC-029 | Click toggle (from light) | Dark | 🌙 |

---

### TC-030: Theme Persistence
**Priority**: High  
**Type**: Functional  
**File**: `03-theme-toggle-tests.cy.js`

**Objective**: Verify theme persists after page reload

**Test Steps**:
1. Visit homepage
2. Toggle to light theme
3. Verify light theme is active
4. Reload page
5. Verify theme is still light

**Expected Result**:
- Theme preference is saved in localStorage
- Theme persists after reload

---

### TC-031-035: Theme Quality Tests
*(Contrast, navigation persistence, hover effects, icon changes)*

---

## TS-04: External Links Tests

### TC-036-039: Hero Section Links
**Priority**: High  
**Type**: Functional  
**File**: `04-links-tests.cy.js`

**Link Validation Matrix**:

| TC ID | Link Type | Selector | Expected URL Pattern |
|-------|-----------|----------|----------------------|
| TC-036 | Email | .hero-content a[href^="mailto"] | mailto:albarokahrifansahsutantoputra@gmail.com |
| TC-037 | WhatsApp | .hero-content a[href^="https://wa.me"] | wa.me/6289611515526 |
| TC-038 | LinkedIn | .social-links-hero a[href*="linkedin"] | linkedin.com/in/albarokahrifansahsutantoputra |
| TC-039 | GitHub | .social-links-hero a[href*="github"] | github.com/Albarokah9 |
| TC-039a | Cover Letter | .social-links-hero a[href*="Cover_Letter"] | files/Cover_Letter_Albarokah.pdf |

**Test Steps** (for each):
1. Visit homepage
2. Locate link element
3. Verify href attribute contains expected URL
4. Verify target="_blank" (for external links)

---

### TC-040-042: Project Links
**Priority**: High  
**Type**: Functional  
**File**: `04-links-tests.cy.js`

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-040 | GitHub Links | All projects link to GitHub |
| TC-041 | New Tab | Links open in new tab (target="_blank") |
| TC-042 | Valid URLs | All project links are not empty |

---

### TC-043-045: Certificate Links
**Priority**: High  
**Type**: Functional  
**File**: `04-links-tests.cy.js`

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-043 | View Buttons | All certs have "View Certificate" button |
| TC-044 | New Tab | Certificates open in new tab |
| TC-045 | Valid URLs | Certificate URLs are not empty |

---

### TC-046-048: Contact Section Links
**Priority**: High  
**Type**: Functional  
**File**: `04-links-tests.cy.js`

| TC ID | Link Type | Expected URL |
|-------|-----------|--------------|
| TC-046 | Email Button | mailto:albarokahrifansahsutantoputra@gmail.com |
| TC-047 | GitHub | github.com/Albarokah9 |
| TC-048 | LinkedIn | linkedin.com/in/albarokahrifansahsutantoputra |

---

### TC-049-050: Link Accessibility
**Priority**: Medium  
**Type**: Accessibility  
**File**: `04-links-tests.cy.js`

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-049 | Internal Links | No broken internal links |
| TC-050 | Link Text | No "click here" or generic text |

---

## TS-05: Responsive Design Tests

### TC-051-054: Multi-Viewport Tests
**Priority**: High  
**Type**: UI/UX  
**File**: `05-responsive-tests.cy.js`

**Viewport Matrix**:

| Viewport | Width | Height | TC IDs | Tests |
|----------|-------|--------|--------|-------|
| Desktop Large | 1920 | 1080 | TC-051-054 | Load, Text, Scroll, Images |
| Desktop | 1366 | 768 | TC-051-054 | Load, Text, Scroll, Images |
| Laptop | 1024 | 768 | TC-051-054 | Load, Text, Scroll, Images |
| Tablet | 768 | 1024 | TC-051-054 | Load, Text, Scroll, Images |
| Mobile Large | 414 | 896 | TC-051-054 | Load, Text, Scroll, Images |
| Mobile | 375 | 667 | TC-051-054 | Load, Text, Scroll, Images |
| Mobile Small | 320 | 568 | TC-051-054 | Load, Text, Scroll, Images |

**Test Steps** (for each viewport):
1. Set viewport to [width]x[height]
2. Visit homepage
3. Verify all sections load
4. Verify text is readable
5. Verify no horizontal scroll
6. Verify images display properly

---

### TC-055-060: Mobile-Specific Tests
**Priority**: High  
**Type**: UI/UX  
**File**: `05-responsive-tests.cy.js`

**Viewport**: 375x667

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-055 | Hamburger Menu | Visible on mobile |
| TC-056 | Desktop Nav | Hidden on mobile |
| TC-057 | Vertical Stack | Elements stack vertically |
| TC-058 | Touch Targets | Buttons ≥ 40x40px |
| TC-059 | Contact Info | Mobile-optimized display |
| TC-060 | Spacing | Adequate padding/margins |

---

### TC-061-062: Tablet-Specific Tests
**Priority**: Medium  
**Type**: UI/UX  
**File**: `05-responsive-tests.cy.js`

**Viewport**: 768x1024

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-061 | Grid Layouts | Adapts for tablet |
| TC-062 | Readability | All text readable |

---

### TC-063-065: Desktop-Specific Tests
**Priority**: Medium  
**Type**: UI/UX  
**File**: `05-responsive-tests.cy.js`

**Viewport**: 1366x768

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-063 | Desktop Nav | Visible and functional |
| TC-064 | Hamburger Menu | Hidden on desktop |
| TC-065 | Multi-Column | Grid layouts active |

---

### TC-066-067: Orientation Tests
**Priority**: Low  
**Type**: UI/UX  
**File**: `05-responsive-tests.cy.js`

| TC ID | Orientation | Viewport | Expected Behavior |
|-------|-------------|----------|-------------------|
| TC-066 | Landscape | 667x375 | Navbar visible |
| TC-067 | Portrait | 375x667 | Navbar visible |

---

## TS-06: Content Validation Tests

### TC-068-070: Hero Content
**Priority**: Medium  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Field | Expected Value |
|-------|-------|----------------|
| TC-068 | Name | "ALBAROKAH RIFANSAH SUTANTO PUTRA" |
| TC-069 | Job Title | "Quality Assurance Engineer" |
| TC-070 | Location | "Bogor" |
| TC-070a | Profile Image | Image Visible & Src Valid |

---

### TC-071-073: Professional Summary
**Priority**: Medium  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Content Type | Expected Values |
|-------|--------------|-----------------|
| TC-071 | Company | "Horus Technology" |
| TC-072 | Tools | Cypress, Katalon Studio, Postman, JMeter |
| TC-073 | Methodologies | SDLC, STLC, Agile |

---

### TC-074-078: Experience Content
**Priority**: Medium  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Field | Expected Value |
|-------|-------|----------------|
| TC-074 | Current Position | "QA Tester Intern" |
| TC-075 | Company | "Horus Technology" |
| TC-076 | Work Period | "Present" |
| TC-077 | Responsibilities | ≥ 3 items |
| TC-078 | Previous Role | "Fiber Optic Technician" |

---

### TC-079-081: Education Content
**Priority**: Medium  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Field | Expected Value |
|-------|-------|----------------|
| TC-079 | Bootcamp | "Bootcamp Quality Assurance Engineer" |
| TC-080 | Provider | "Eduwork.id" |
| TC-081 | Year | "2025" |

---

### TC-082-086: Skills Content
**Priority**: Medium  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-082 | Manual Testing Category | Category exists |
| TC-083 | Automation Testing Category | Category exists |
| TC-084 | Cypress Skill | Listed in skills |
| TC-085 | API Tools | Postman listed |
| TC-086 | Total Skills | ≥ 20 skills |

---

### TC-087-091: Projects Content
**Priority**: Medium  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-087 | Project Count | ≥ 3 projects |
| TC-088 | Project Titles | All have titles |
| TC-089 | Descriptions | All have descriptions |
| TC-090 | Tech Tags | ≥ 1 tag per project |
| TC-091 | Dates | All have dates |

---

### TC-092-095: Certifications Content
**Priority**: Medium  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Test Case | Expected Behavior |
|-------|-----------|-------------------|
| TC-092 | Cert Count | ≥ 4 certifications |
| TC-093 | QA Bootcamp | "QA Effective Testing Strategies" exists |
| TC-094 | Issuers | All have issuers |
| TC-095 | Descriptions | All have descriptions |

---

### TC-096-098: Contact Content
**Priority**: Medium  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Field | Expected Value |
|-------|-------|----------------|
| TC-096 | CTA Text | "Get In Touch" |
| TC-097 | Email Button | "Email Me" |
| TC-098 | Social Links | ≥ 2 links |

---

### TC-099-101: Footer Content
**Priority**: Low  
**Type**: Content  
**File**: `06-content-validation-tests.cy.js`

| TC ID | Field | Expected Value |
|-------|-------|----------------|
| TC-099 | Copyright Year | "2025" |
| TC-100 | Author | "Albarokah Rifansah Sutanto Putra" |
| TC-101 | Tech Stack | "Vite" |

---

## Test Execution Summary

### Execution Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Total Test Cases | 126 | 126 |
| Automated | 100% | 126 |
| Pass Rate | ≥95% | 100% |
| Coverage | ≥90% | ~95% |
| Execution Time | <5 min | ~5 min |

### Test Status Legend
- ✅ **Pass**: Test executed successfully
- ❌ **Fail**: Test failed, bug logged
- ⏭️ **Skip**: Test skipped (known issue)
- 🔄 **Retest**: Test needs re-execution
- 📝 **Blocked**: Test blocked by dependency

---

## Traceability Matrix

| Requirement | Test Cases | Coverage |
|-------------|------------|----------|
| Homepage Load | TC-001, TC-002, TC-003 | ✅ 100% |
| Navigation | TC-013 to TC-025 | ✅ 100% |
| Theme Toggle | TC-026 to TC-035 | ✅ 100% |
| External Links | TC-036 to TC-050 | ✅ 100% |
| Responsive Design | TC-051 to TC-067 | ✅ 100% |
| Content Accuracy | TC-068 to TC-101 | ✅ 100% |

---

**Document Version**: 1.0  
**Last Updated**: December 10, 2025  
**Author**: Albarokah Rifansah Sutanto Putra  
**Status**: ✅ Ready for Execution