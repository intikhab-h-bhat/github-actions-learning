Simple Node Project for Learning GitHub Actions

Local commands:
1. npm ci
2. npm test
3. npm start

Workflow:
- File: .github/workflows/push-workflow.yml
- Triggers on push and pull_request to main, and manual run.
- Steps: checkout, setup node, npm ci, npm test, npm start.

How to test in GitHub:
1. Commit and push to main (or open PR to main).
2. Open the Actions tab in GitHub.
3. Check the Push Workflow run logs.
