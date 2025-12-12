# 🚀 CI/CD Setup Guide - GitHub Actions + Cypress Dashboard

## Overview
This project uses **GitHub Actions** for Continuous Integration and **Cypress Dashboard** for test result reporting and analytics.

---

## 📋 Prerequisites

1. **GitHub Repository** - Your portfolio code pushed to GitHub
2. **Cypress Dashboard Account** - Free account at [dashboard.cypress.io](https://dashboard.cypress.io)
3. **Project ID** - Already configured in `cypress.config.js`
4. **Record Key** - Obtained from Cypress Dashboard

---

## 🔧 Setup Steps

### Step 1: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secret:

   **Name:** `CYPRESS_RECORD_KEY`  
   **Value:** `3805c47c-eb3d-4118-a325-06b38a4f8525`

5. Click **Add secret**

### Step 2: Verify Workflow File

The workflow file is already created at `.github/workflows/cypress.yml`

**Key Configuration:**
- **Trigger:** Runs on every `push` and `pull_request`
- **Parallel Execution:** 2 containers for faster test runs
- **Server:** Vite dev server on port 5173
- **Recording:** Enabled with Cypress Dashboard

### Step 3: Test Locally (Optional)

Before pushing, you can test the recording locally:

```bash
npx cypress run --record --key 3805c47c-eb3d-4118-a325-06b38a4f8525
```

This will:
- Run all 123 tests
- Upload results to Cypress Dashboard
- Generate video recordings
- Create screenshots for failed tests

---

## 🎯 How It Works

### On Every Push:

1. **GitHub Actions triggers** the workflow
2. **Ubuntu runner** spins up
3. **Node.js 22** is installed
4. **Dependencies** are installed (`npm ci`)
5. **Vite dev server** starts on port 5173
6. **Cypress tests** run in parallel (2 containers)
7. **Results** are recorded to Cypress Dashboard
8. **Videos & Screenshots** are uploaded
9. **Workflow completes** with pass/fail status

### Parallel Execution:

```yaml
matrix:
  containers: [1, 2]
```

This splits the 123 tests across 2 containers:
- **Container 1:** ~62 tests
- **Container 2:** ~61 tests

**Result:** ~50% faster execution time!

---

## 📊 Cypress Dashboard Features

Once tests run, you can view:

1. **Test Results** - Pass/Fail status for each test
2. **Video Recordings** - Watch test execution
3. **Screenshots** - See failures in detail
4. **Trends** - Track test performance over time
5. **Flaky Tests** - Identify unstable tests
6. **Analytics** - Test duration, failure rates, etc.

**Access Dashboard:**
[https://cloud.cypress.io/projects/azqdup](https://cloud.cypress.io/projects/azqdup)

---

## 🔍 Monitoring Test Runs

### View in GitHub:

1. Go to your repository
2. Click **Actions** tab
3. Select a workflow run
4. View logs, test results, and artifacts

### View in Cypress Dashboard:

1. Go to [dashboard.cypress.io](https://dashboard.cypress.io)
2. Select your project
3. View detailed test results with videos

---

## 🛠️ Troubleshooting

### Tests Fail in CI but Pass Locally

**Possible Causes:**
- Different Node.js versions
- Missing environment variables
- Timing issues (CI is slower)

**Solutions:**
```yaml
# Increase wait-on timeout
wait-on-timeout: 120

# Use specific Node version
node-version: '22'
```

### Recording Not Working

**Check:**
1. `CYPRESS_RECORD_KEY` secret is set correctly
2. Project ID in `cypress.config.js` matches dashboard
3. Network connectivity to Cypress Cloud

### Parallel Tests Not Running

**Verify:**
```yaml
strategy:
  matrix:
    containers: [1, 2]
```

And:
```yaml
parallel: true
```

---

## 📈 Best Practices

### 1. **Keep Tests Fast**
- Current suite: ~5 minutes for 123 tests
- Target: < 3 minutes with optimization

### 2. **Monitor Flaky Tests**
- Use Cypress Dashboard to identify
- Fix or quarantine flaky tests

### 3. **Review Failures Immediately**
- Check videos and screenshots
- Fix broken tests before merging

### 4. **Update Dependencies**
```bash
npm update cypress
```

### 5. **Clean Up Old Runs**
- Cypress Dashboard keeps runs for 30 days (free plan)
- Archive important runs

---

## 🎓 Additional Resources

- [Cypress CI Documentation](https://docs.cypress.io/guides/continuous-integration/introduction)
- [GitHub Actions for Cypress](https://github.com/cypress-io/github-action)
- [Cypress Dashboard Guide](https://docs.cypress.io/guides/cloud/introduction)
- [Parallelization Guide](https://docs.cypress.io/guides/guides/parallelization)

---

## ✅ Verification Checklist

- [ ] GitHub secret `CYPRESS_RECORD_KEY` is set
- [ ] Workflow file exists at `.github/workflows/cypress.yml`
- [ ] Project ID in `cypress.config.js` is correct
- [ ] Tests pass locally
- [ ] First CI run completed successfully
- [ ] Results visible in Cypress Dashboard
- [ ] Parallel execution working (2 containers)

---

**Last Updated:** December 13, 2025  
**Author:** Albarokah Rifansah Sutanto Putra  
**Status:** ✅ Production Ready
