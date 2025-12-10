# 🔄 CI/CD Test Execution Guide

## 📋 Overview

Ketika CI/CD workflow (`ci-e2e.yml`) dijalankan, **SEMUA test files** di folder `cypress/e2e/` akan dieksekusi secara otomatis.

---

## 🎯 Test Files yang Dijalankan di CI/CD

### Command yang Dijalankan:
```bash
npm run test:e2e
```

Yang setara dengan:
```bash
cypress run
```

### Files yang Akan Dieksekusi (Urutan Alfabetis):

| # | File | Test Cases | Priority | Execution Time |
|---|------|------------|----------|----------------|
| 1 | `01-smoke-tests.cy.js` | 12 | Critical | ~30s |
| 2 | `02-navigation-tests.cy.js` | 25 | High | ~45s |
| 3 | `03-theme-toggle-tests.cy.js` | 10 | High | ~25s |
| 4 | `04-links-tests.cy.js` | 15 | High | ~35s |
| 5 | `05-responsive-tests.cy.js` | 17 | High | ~90s |
| 6 | `06-content-validation-tests.cy.js` | 34 | Medium | ~60s |
| **TOTAL** | **6 Files** | **113 Cases** | - | **~5 min** |

---

## 🚀 CI/CD Workflow Trigger

### Automatic Trigger:
CI/CD akan otomatis berjalan saat:
- ✅ **Push** ke branch `main` atau `develop`
- ✅ **Pull Request** ke branch `main` atau `develop`

### Workflow Steps:
```yaml
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (npm ci)
4. Fix Rollup dependencies (Linux workaround)
5. Build application (npm run build)
6. Start preview server (npm run preview)
7. Wait for server ready (http://127.0.0.1:5173)
8. Run Cypress tests (npm run test:e2e) ← SEMUA 6 FILES
9. Upload screenshots (on failure)
10. Upload videos (always)
11. Upload test results (always)
```

---

## 📊 Test Execution Flow

```
CI/CD Trigger (Push/PR)
    ↓
Install Dependencies
    ↓
Build Application
    ↓
Start Preview Server
    ↓
Run: npm run test:e2e
    ↓
Cypress Executes ALL Files in cypress/e2e/:
    ├─ 01-smoke-tests.cy.js (12 tests)
    ├─ 02-navigation-tests.cy.js (25 tests)
    ├─ 03-theme-toggle-tests.cy.js (10 tests)
    ├─ 04-links-tests.cy.js (15 tests)
    ├─ 05-responsive-tests.cy.js (17 tests)
    └─ 06-content-validation-tests.cy.js (34 tests)
    ↓
Generate Reports & Artifacts
    ↓
Upload to GitHub Actions
```

---

## 🎮 Manual Test Execution

### Run ALL Tests (Same as CI/CD):
```bash
npm run test:e2e
```

### Run Specific Test Suite:
```bash
# Smoke tests only
npm run test:e2e:smoke

# Navigation tests only
npm run test:e2e:nav

# Theme toggle tests only
npm run test:e2e:theme

# Links tests only
npm run test:e2e:links

# Responsive tests only
npm run test:e2e:responsive

# Content validation tests only
npm run test:e2e:content
```

### Run with Cypress Test Runner (GUI):
```bash
npm run cypress:open
```

### Run in Specific Browser:
```bash
# Chrome
npx cypress run --browser chrome

# Firefox
npx cypress run --browser firefox

# Edge
npx cypress run --browser edge
```

---

## 📁 Test File Naming Convention

Test files **HARUS** mengikuti pattern `*.cy.js` agar Cypress dapat mendeteksi dan menjalankannya.

### Current Files:
- ✅ `01-smoke-tests.cy.js`
- ✅ `02-navigation-tests.cy.js`
- ✅ `03-theme-toggle-tests.cy.js`
- ✅ `04-links-tests.cy.js`
- ✅ `05-responsive-tests.cy.js`
- ✅ `06-content-validation-tests.cy.js`

### Numbering System:
- `01-` = Critical priority (smoke tests)
- `02-05` = High priority (core functionality)
- `06-` = Medium priority (content validation)

---

## 🔍 Viewing CI/CD Test Results

### On GitHub:
1. Go to **Actions** tab
2. Click on latest workflow run
3. View test results in workflow logs
4. Download artifacts (screenshots, videos, reports)

### Artifacts Available:
- **cypress-screenshots-20.x** (on test failure)
- **cypress-videos-20.x** (always)
- **test-results-20.x** (always)

---

## ⚙️ Configuration

### Cypress Config (`cypress.config.js`):
```javascript
{
  baseUrl: 'http://localhost:5173/',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  viewportWidth: 1366,
  viewportHeight: 768,
}
```

### CI/CD Environment Variables:
```yaml
CYPRESS_BASE_URL: http://127.0.0.1:5173
```

---

## 🎯 Test Execution Strategy

### CI/CD (Automated):
- **When**: Every push/PR to main/develop
- **What**: ALL 113 test cases
- **Where**: GitHub Actions (Ubuntu Linux)
- **Browser**: Electron (headless)
- **Timeout**: 15 minutes max

### Local Development:
- **When**: Before committing changes
- **What**: Relevant test suite only
- **Where**: Developer machine
- **Browser**: Chrome/Firefox (headed or headless)
- **Timeout**: No limit

---

## 📈 Success Criteria

### CI/CD Pass Criteria:
- ✅ All 113 test cases pass
- ✅ No console errors
- ✅ Execution time < 5 minutes
- ✅ No screenshots in failure artifacts

### Failure Handling:
- ❌ Any test fails → CI/CD fails
- 📸 Screenshots uploaded for debugging
- 🎥 Videos uploaded for analysis
- 🔄 Retry mechanism: None (fail-fast: false)

---

## 🚨 Troubleshooting

### Issue: CI/CD runs old tests
**Cause**: Old test files still exist  
**Solution**: Delete old files, keep only 01-06 files

### Issue: Tests pass locally but fail in CI
**Cause**: Environment differences  
**Solution**: Check baseUrl, viewport, timing issues

### Issue: Tests are too slow
**Cause**: Too many tests or slow selectors  
**Solution**: Optimize selectors, reduce wait times

---

## 📝 Adding New Tests

### To Add New Test File:

1. **Create file** in `cypress/e2e/`:
   ```
   07-new-feature-tests.cy.js
   ```

2. **File will automatically run** in CI/CD (no config needed)

3. **Add npm script** for manual execution:
   ```json
   "test:e2e:newfeature": "cypress run --spec 'cypress/e2e/07-new-feature-tests.cy.js'"
   ```

4. **Update documentation**:
   - TEST_CASES.md
   - TEST_PLAN.md
   - This file

---

## 📊 Current Test Coverage

| Feature | Files | Test Cases | Coverage |
|---------|-------|------------|----------|
| Critical Path | 1 | 12 | 100% |
| Navigation | 1 | 25 | 100% |
| Theme Toggle | 1 | 10 | 100% |
| External Links | 1 | 15 | 100% |
| Responsive Design | 1 | 17 | 100% |
| Content Validation | 1 | 34 | 100% |
| **TOTAL** | **6** | **113** | **~95%** |

---

## 🔗 Related Documentation

- **Test Plan**: `TEST_PLAN.md`
- **Test Cases**: `TEST_CASES.md`
- **Cypress Guide**: `cypress/README.md`
- **CI/CD Workflow**: `.github/workflows/ci-e2e.yml`

---

**Last Updated**: December 10, 2025  
**Author**: Albarokah Rifansah Sutanto Putra  
**Status**: ✅ Active
