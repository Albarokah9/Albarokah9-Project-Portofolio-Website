# 📋 Test Plan - QA Portfolio Website

## 1. Introduction

### 1.1 Purpose
This document outlines the comprehensive test strategy for the QA Portfolio Website. The purpose is to ensure the website functions correctly across all browsers, devices, and user scenarios.

### 1.2 Scope
**In Scope:**
- Functional testing of all website sections
- UI/UX testing across multiple viewports
- Navigation and routing testing
- Theme toggle functionality
- External links validation
- Content accuracy verification
- Responsive design testing
- Cross-browser compatibility

**Out of Scope:**
- Backend API testing (static website)
- Performance/Load testing
- Security penetration testing
- SEO optimization testing

### 1.3 Test Objectives
1. Verify all sections load correctly and display accurate content
2. Ensure smooth navigation across all sections
3. Validate theme toggle works seamlessly in both dark and light modes
4. Confirm all external links are valid and open correctly
5. Verify responsive design works on all device sizes
6. Ensure accessibility standards are met
7. Validate content accuracy and completeness

---

## 2. Test Strategy

### 2.1 Testing Approach
- **Automation Framework**: Cypress (JavaScript)
- **Design Pattern**: Page Object Model (POM)
- **Test Organization**: Modular test suites by functionality
- **Session Management**: cy.session for state persistence

### 2.2 Test Levels
1. **Smoke Tests** - Critical path verification
2. **Functional Tests** - Feature-specific validation
3. **UI/UX Tests** - Visual and interaction testing
4. **Regression Tests** - Ensure existing features still work

### 2.3 Test Types
- **Functional Testing**: Verify features work as expected
- **UI Testing**: Validate visual elements and layouts
- **Navigation Testing**: Test routing and smooth scrolling
- **Responsive Testing**: Verify across multiple viewports
- **Content Testing**: Validate data accuracy
- **Link Testing**: Verify all external links

---

## 3. Test Environment

### 3.1 Browsers
- **Primary**: Chrome (latest)
- **Secondary**: Firefox (latest), Safari (latest), Edge (latest)

### 3.2 Devices/Viewports
| Device Type | Resolution | Priority |
|-------------|------------|----------|
| Desktop Large | 1920x1080 | High |
| Desktop | 1366x768 | High |
| Laptop | 1024x768 | Medium |
| Tablet | 768x1024 | High |
| Mobile Large | 414x896 | High |
| Mobile | 375x667 | High |
| Mobile Small | 320x568 | Medium |

### 3.3 Test Data
- **Static Content**: Hardcoded in HTML/JS
- **Dynamic Content**: Projects loaded from main.js
- **External URLs**: LinkedIn, GitHub, WhatsApp, Certificates

---

## 4. Test Coverage

### 4.1 Functional Coverage

#### 4.1.1 Navigation (25 Test Cases)
- Desktop navigation (7 sections)
- Mobile navigation (hamburger menu)
- Smooth scrolling
- URL hash updates
- Sticky navbar

#### 4.1.2 Theme Toggle (10 Test Cases)
- Dark to Light theme switching
- Light to Dark theme switching
- Theme persistence (localStorage)
- Theme icon changes
- Contrast verification

#### 4.1.3 External Links (15 Test Cases)
- Email links (mailto:)
- WhatsApp links
- LinkedIn links
- GitHub links
- Certificate links
- Target="_blank" validation

#### 4.1.4 Content Validation (34 Test Cases)
- Hero section content
- Professional summary
- Experience timeline
- Education details
- Skills categories
- Projects information
- Certifications
- Contact information
- Footer content

#### 4.1.5 Responsive Design (17 Test Cases)
- 7 viewport sizes
- Orientation testing
- Mobile-specific features
- Tablet-specific features
- Desktop-specific features

### 4.2 Coverage Summary
| Test Suite | Test Cases | Priority |
|------------|------------|----------|
| Smoke Tests | 12 | Critical |
| Navigation Tests | 25 | High |
| Theme Toggle Tests | 10 | High |
| Links Tests | 15 | High |
| Responsive Tests | 17 | High |
| Content Validation | 34 | Medium |
| **TOTAL** | **113** | - |

---

## 5. Test Execution

### 5.1 Test Execution Schedule
- **Smoke Tests**: Every commit (CI/CD)
- **Full Regression**: Before each deployment
- **Manual Exploratory**: Weekly

### 5.2 Entry Criteria
- Development environment is stable
- All code changes are committed
- Dev server is running (localhost:5173)

### 5.3 Exit Criteria
- All critical tests pass (100%)
- High priority tests pass (≥95%)
- Medium priority tests pass (≥90%)
- No critical bugs open
- Test coverage ≥90%

### 5.4 Test Execution Commands

```bash
# Run all tests (headless)
npm run test:e2e

# Run specific test suite
npx cypress run --spec "cypress/e2e/01-smoke-tests.cy.js"

# Open Cypress Test Runner (GUI)
npm run cypress:open

# Run tests in specific browser
npx cypress run --browser chrome
npx cypress run --browser firefox
```

---

## 6. Defect Management

### 6.1 Severity Levels
- **Critical**: Application crash, data loss, security issues
- **High**: Major functionality broken, no workaround
- **Medium**: Functionality broken, workaround exists
- **Low**: Minor UI issues, cosmetic problems

### 6.2 Priority Levels
- **P1**: Fix immediately (Critical bugs)
- **P2**: Fix in current sprint (High priority)
- **P3**: Fix in next sprint (Medium priority)
- **P4**: Fix when time permits (Low priority)

### 6.3 Bug Reporting
- **Tool**: GitHub Issues
- **Template**: Bug report template with steps to reproduce
- **Attachments**: Screenshots, videos (Cypress artifacts)

---

## 7. Risks and Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Browser compatibility issues | High | Medium | Test on multiple browsers |
| Responsive design breaks | High | Low | Comprehensive viewport testing |
| External links become invalid | Medium | Medium | Regular link validation |
| Theme toggle localStorage issues | Medium | Low | Clear cache testing |
| CI/CD pipeline failures | High | Low | Retry mechanism, artifact uploads |

---

## 8. Test Deliverables

### 8.1 Test Artifacts
- ✅ Test Plan (this document)
- ✅ Test Cases (TEST_CASES.md)
- ✅ Page Object Models (BasePage.js, PortfolioPage.js)
- ✅ Test Scripts (6 test suites, 113 test cases)
- ✅ Test Execution Reports (Cypress Dashboard)
- ✅ Screenshots/Videos (on test failure)

### 8.2 Reporting
- **Daily**: CI/CD test results
- **Weekly**: Test execution summary
- **Per Release**: Full regression report

---

## 9. Test Metrics

### 9.1 Key Metrics
- **Test Coverage**: % of features covered by tests
- **Pass Rate**: % of tests passing
- **Defect Density**: Bugs per test case
- **Test Execution Time**: Time to run full suite
- **Automation ROI**: Time saved vs manual testing

### 9.2 Success Criteria
- ✅ Test Coverage ≥ 90%
- ✅ Pass Rate ≥ 95%
- ✅ Critical bugs = 0
- ✅ Test execution time < 5 minutes
- ✅ Zero false positives

---

## 10. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| QA Lead | Albarokah Rifansah Sutanto Putra | _______ | Dec 10, 2025 |
| Developer | Albarokah Rifansah Sutanto Putra | _______ | Dec 10, 2025 |
| Project Owner | Albarokah Rifansah Sutanto Putra | _______ | Dec 10, 2025 |

---

## 11. Appendix

### 11.1 Test Automation Architecture

```
Project-Portofolio-Website/
├── cypress/
│   ├── e2e/
│   │   ├── 01-smoke-tests.cy.js          (12 tests)
│   │   ├── 02-navigation-tests.cy.js     (25 tests)
│   │   ├── 03-theme-toggle-tests.cy.js   (10 tests)
│   │   ├── 04-links-tests.cy.js          (15 tests)
│   │   ├── 05-responsive-tests.cy.js     (17 tests)
│   │   └── 06-content-validation-tests.cy.js (34 tests)
│   ├── support/
│   │   ├── pages/
│   │   │   ├── BasePage.js               (Base POM)
│   │   │   └── PortfolioPage.js          (Portfolio POM)
│   │   ├── commands.js                   (Custom commands)
│   │   └── e2e.js                        (Setup)
│   └── fixtures/
│       └── example.json
└── cypress.config.js
```

### 11.2 Page Object Model Benefits
- ✅ **Reusability**: Common methods in BasePage
- ✅ **Maintainability**: Selectors centralized
- ✅ **Readability**: Tests are more readable
- ✅ **Scalability**: Easy to add new pages/features

### 11.3 CI/CD Integration
- **Trigger**: Push to main/develop branches
- **Steps**:
  1. Install dependencies
  2. Build application
  3. Start preview server
  4. Run Cypress tests
  5. Upload artifacts (screenshots/videos)
  6. Generate test report

---

**Document Version**: 1.0  
**Last Updated**: December 10, 2025  
**Author**: Albarokah Rifansah Sutanto Putra  
**Status**: ✅ Approved
