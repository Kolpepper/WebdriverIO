const assert = require('assert');
const SingUpPage = require('../page/SingUp.page');
const HomePage = require('../page/Home.page');

describe('Test telnyx Sing up page', () => {

    it('Test #15 logo', async () => {
        browser.url('https://telnyx.com/sign-up');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        SingUpPage.clickLogo();
        await expect(browser).toHaveUrlContaining('https://telnyx.com/')
    });

   it('Test #16 check fields for validity', async () => {
        browser.url('https://telnyx.com/sign-up');
        await browser.maximizeWindow();
        SingUpPage.clickAcceptBtn();
        await browser.pause(2000);
        SingUpPage.clickEmailField();
        SingUpPage.addValueEmailField();
        SingUpPage.clickNameField();
        SingUpPage.addValueNameField();
        SingUpPage.clickPasswordField();
        await browser.pause(3000);
        SingUpPage.addValuePasswordField();
        await browser.pause(2000);
        await browser.saveScreenshot('./test/screenshots/test16.png')
    });

    it('Test #17 Sing up with Google button', async () => {
        browser.url('https://telnyx.com/sign-up');
        await browser.maximizeWindow();
        SingUpPage.clickAcceptBtn();
        await browser.pause(2000);
        SingUpPage.isDisplayedGoogleSingUp();
        console.log('Element Sing up with Google is visable:' + await SingUpPage.googleSingUp.isDisplayed()); 
    });

    it('Test #18 Sing up with Microsoft button', async () => {
        browser.url('https://telnyx.com/sign-up');
        await browser.maximizeWindow();
        SingUpPage.clickAcceptBtn();
        await browser.pause(2000);
        SingUpPage.isDisplayedMicrosoftSingUp();
        console.log('Element Sing up with Microsoft is visable:' + await SingUpPage.microsoftSingUp.isDisplayed()); 
    });

    it('Test #19 Have a promo code button', async () => {
        browser.url('https://telnyx.com/sign-up');
        await browser.maximizeWindow();
        SingUpPage.clickAcceptBtn();
        await browser.pause(2000);
        SingUpPage.isDisplayedPromoBtn();
        console.log('Element Sing up with Microsoft is visable:' + await SingUpPage.promoBtn.isDisplayed());
        SingUpPage.clickPromoBtn();
        SingUpPage.clickPromoField();
        SingUpPage.addValuePromoField();
        await browser.pause(2000);
        await browser.saveScreenshot('./test/screenshots/test19.png')
    });

    it('Test #20 Privacy policy', async () => {
        browser.url('https://telnyx.com/sign-up');
        await browser.maximizeWindow();
        SingUpPage.clickAcceptBtn();
        await browser.pause(2000);
        const form = await $('//div/span/a[2]')
        const attr = ('Privacy policy link:' + await form.getAttribute('href'))
        console.log(attr)
    });
})
