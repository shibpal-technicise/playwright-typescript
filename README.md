# playwright-typescript

Inside that directory, you can run several commands:

  npm init playwright@latest
    Installs Playwright.

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭

How to create a new repository on the command line:
echo "# playwright-typescript" >> README.md
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/shibpal-technicise/playwright-typescript.git
git push -u origin main