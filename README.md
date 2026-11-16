# Playwright + BDD + POM (JavaScript)

## Installation
npm install
npx playwright install

## Run Tests
npm test

## Framework Structure
- features/             -> Cucumber feature files
- src/pages/            -> Page Object Model classes
- src/steps/            -> Step definitions
- src/hooks/            -> Hooks for browser setup/teardown
- cucumber.js           -> Cucumber configuration

## Sample Test
Logs into SauceDemo using:
Username: standard_user
Password: secret_sauce
