import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/LoginPage.js';
import Locators  from '../Locators/Locators.js';


//Navigation to the specified URL
Given('User login to {string}', async function (url) {

        this.loginPage = new LoginPage(this.page);
        await this.loginPage.navigate(url);

    }
);

//Wait for a specific number of seconds
Then('User wait for {string} seconds',{ timeout: 15000 }, async function (seconds) {
    
    await this.page.waitForTimeout(Number(seconds) * 1000);
  }
);


//Click Action
When('User click on {string} button', async function (button) {
   
    await this.loginPage.Action(button);
});


//Form Filling
When('User enter {string} in {string} field', async function (value, field) {

    this.loginPage = new LoginPage(this.page);    
    await this.loginPage.Fill(value, field);

    }
);

//Validation of Element Displayed
Then('User verify that {string} is displayed on the homepage', async function (welcomeMessage) {

    this.loginPage = new LoginPage(this.page);    
    await this.loginPage.Validation(
            welcomeMessage
        );

    }
);

//Validation of Element Displayed using Locator
Then('User verify that {string} from {string} is displayed on the homepage', async function (locatorName, locatorPageName) {

        this.loginPage = new LoginPage(this.page);

        let locator;

        if (locatorPageName === 'Locators') {

            locator = Locators[locatorName];

        }

        if (!locator) {

            throw new Error(
                `Locator '${locatorName}' not found in '${locatorPageName}'`
            );
        }

        await this.loginPage.ValidationByLocator(locator);

    }
);


//Scroll to Element
Then('User scroll untill {string} is visible on the page', async function (elementText) {
    const locator = this.page.locator(`text=${elementText}`);
    await this.loginPage.scrollToElement(locator);
    console.log(`Scrolled until element with text '${elementText}' is visible on the page`);
});
