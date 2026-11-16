const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.browser.close();
});



// My custom hooks for specific tags
 Before({tags:"@Hooktest"} , async function () {
  console.log("Before Hook executed for @Hooktest tag");
});

 After({tags:"@Hooktest"} , async function () {
  console.log("After Hook executed for @Hooktest tag");
});