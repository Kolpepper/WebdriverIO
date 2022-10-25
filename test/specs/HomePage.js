const assert = require('assert');
const HomePage = require('../page/Home.page');
const SingUpPage = require('../page/SingUp.page');
const NetworkPage = require('../page/Network.page')

describe('Test telnyx home page', () => {

    it('Test #1 accept and close button', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('https://telnyx.com/');
    });

    it('Test #2 Sing up button', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.clickSingUpBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('sign-up');
    });

    it('Test #3 Talk to an expert button', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.clickTalkExpertBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('https://telnyx.com/contact-us');
    });

    it('Test #4 Explore our products button', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.moveToExploreProductsBtn();
        HomePage.clickExploreProductsBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('https://telnyx.com/products');
    });

    it('Test #5 Header menu', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        await browser.waitUntil(
            async () => (await $('//li[1]/span/span').getText()) === 'Products',
            {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
            });            
        await browser.waitUntil(
            async () => (await $('//li[2]/span/span').getText()) === 'Solutions',
            {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
            });
        await browser.waitUntil(
            async () => (await $('//li[3]/span/a').getText()) === 'Network',
            {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
            });
        await browser.waitUntil(
            async () => (await $('//li[4]/span/span').getText()) === 'Resources',
            {
           timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
            });            
        await browser.waitUntil(
            async () => (await $('//li[5]/span/span').getText()) === 'Company',
            {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
            });
        await browser.waitUntil(
            async () => (await $('//li[6]/span/span').getText()) === 'Pricing',
            {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
            });   
    });

    it('Test #6 Try fo free button', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.clickEmailField();
        HomePage.addValueEmailField();
        HomePage.clickTryForFreeBtn();
        await browser.pause(4000);
        await expect(browser).toHaveUrlContaining('telnyx');
        SingUpPage.getValueEmailField();
        console.log('Text in the email field: ' + await SingUpPage.emailField.getValue());
    });

    it('Test #7 Start your free trial button', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.moveToStartFreeTrailBtn();
        HomePage.clickStartFreeTrailBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('sign-up');
        SingUpPage.getValueEmailField();
        SingUpPage.getValueNameField();
        SingUpPage.getValuePasswordField();
        console.log('Text in the email field: ' + await SingUpPage.emailField.getValue());
        console.log('Text in the name field: ' + await SingUpPage.nameField.getValue());
        console.log('Text in the password field: ' + await SingUpPage.passwordField.getValue());
    });

    it('Test #8 Menu bar in phone size', async () => {
        browser.url('https://telnyx.com/');
        await browser.setWindowSize(414,896)
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.clickMenuBtn();
        HomePage.clickMenuProduct();
        HomePage.clickMenuProductSeeAll();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('https://telnyx.com/products');
    });

    it('Test #9 Checking text in the h2 element', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        await browser.waitUntil(
            async () => (await $('//div[2]/div/div[1]/div/header/h2').getText()) === 'Build the next generation of applications that connect your customers',
            {
                timeout:5000,
                timeoutMsg: 'expected text to be different after 5s'
            });
        HomePage.isDisplayedTextH2El();
        console.log('Element h2 visable: ' + await HomePage.textH2El.isDisplayed());        
    });

    it('Test #10 network button', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.clickNetworkBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('https://telnyx.com/solutions/global-ip-network');
        NetworkPage.clickTryOurNetworkBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('sign-up');
    });

    it('Test #11 SMS API', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.clickSmsApi();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('https://telnyx.com/products/sms-api');
    });

    it('Test #12 Video API', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.clickVideoApi();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('https://telnyx.com/products/video-api');
    });

    it('Test #13 learn more', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.moveToLearnMoreLink();
        HomePage.clickLearnMoreLink();
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('telnyx.com');
    });

    it('Test #14 Create a free trial account button', async () => {
        browser.url('https://telnyx.com/');
        await browser.maximizeWindow();
        HomePage.clickAcceptBtn();
        await browser.pause(2000);
        HomePage.scrollIntoViewcCmpareCosts();
        await browser.pause(2000);
        HomePage.clickCreateFreeTrialBtn();
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('sign-up');
    });
})
