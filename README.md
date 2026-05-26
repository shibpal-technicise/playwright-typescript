# playwright-typescript

Inside that directory, you can run several commands.

Installs Playwright:

    npm init playwright@latest

Runs the end-to-end tests:

    npx playwright test

Starts the interactive UI mode:

    npx playwright test --ui

Runs the tests only on Desktop Chrome:

    npx playwright test --project=chromium

Runs the tests in a specific file:

    npx playwright test example

Runs the tests in debug mode:

    npx playwright test --debug

Auto generate tests with Codegen:

    npx playwright codegen

We suggest that you begin by typing:

    npx playwright test

To open last HTML report run:

    npx playwright show-report

Runs tests in headed mode:

    npx playwright test --headed

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