import { expect } from '@playwright/test';
import Locators from '../Locators/Locators.js';

export default class LoginPage {

    constructor(page) {

        this.page = page;

    }

    //Navigation to the specified URL
    async navigate(url) {

        if (url === 'DemoBlaze') {

            await this.page.goto('https://demoblaze.com/');
            console.log('Navigated to DemoBlaze');

        }

    }


    //Click Action
    async Action(button) {

        const locator = Locators[button];

        if (!locator) {
            throw new Error(`Locator '${button}' was not found in Locators.js`);
        }

        await this.page.locator(locator).click();
    }


    //Form Filling
    async Fill(value, field) {

        if (field === 'Username') {

            await this.page.fill(
                Locators.usernameTextbox,
                value
            );

        }

        else if (field === 'Password') {

            await this.page.fill(
                Locators.passwordTextbox,
                value
            );

        }

    }


    //Validation of Element Displayed
    async Validation(expectedText) {

        await expect(
            this.page.locator(
                `//*[text()='${expectedText}']` // JS literal template to locate the element containing the expected text.
            )
        ).toBeVisible();
        console.log(`Verified that '${expectedText}' is displayed on the homepage`);

    }

     
    //Validation of Element Displayed using Locator
    async ValidationByLocator(locator) {

        await expect(
            this.page.locator(locator)
        ).toBeVisible();
        console.log(`Verified that element with locator '${locator}' is displayed on the homepage`);

    }

    //Scroll to Element
    async scrollToElement(elementName) {
        await this.page.locator(Locators[elementName]).scrollIntoViewIfNeeded();
        console.log(`Scrolled until '${elementName}' is visible on the page`);
    }
        
}
