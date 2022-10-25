class HomePage {

    get acceptBtn() {
        return $('[class$="UnEoi itIjRb"]');
    }
    clickAcceptBtn() {
        this.acceptBtn.click();
    }

    get singUpBtn() {
        return $('li [class$="hBNXWZ mchNoDecorate sign-up-link"]');
    }
    clickSingUpBtn() {
        this.singUpBtn.click();
    }

    get talkExpertBtn() {
        return $('[class$="byuCMl"] [class$="mchNoDecorate"]');
    }
    clickTalkExpertBtn() {
        this.talkExpertBtn.click();
    }

    get exploreProductsBtn() {
        return $('a[class$="hBNXWZ mchNoDecorate"]');
    }
    clickExploreProductsBtn() {
        this.exploreProductsBtn.click();
    }
    moveToExploreProductsBtn() {
        this.exploreProductsBtn.moveTo();
    }

    get emailField() {
        return $('[type="email"]');
    }
    clickEmailField() {
        this.emailField.click();
    }
    addValueEmailField() {
        this.emailField.addValue('test@gmail.com');
    }

    get tryForFreeBtn() {
        return $('[class="sc-5d3a275a-2 krPznm"]');
    }
    clickTryForFreeBtn() {
        this.tryForFreeBtn.click();
    }

    get startFreeTrailBtn() {
        return $('//div[15]/div/div/div[1]/a');
    }
    moveToStartFreeTrailBtn() {
        this.startFreeTrailBtn.moveTo();
    }
    clickStartFreeTrailBtn() {
        this.startFreeTrailBtn.click();
    }

    get menuBtn() {
        return $('//header/div[2]/div/div[3]/*');
    }
    clickMenuBtn() {
        this.menuBtn.click();
    }

    get menuProduct() {
        return $('//nav/div[2]/div/div/div/div[1]/div[1]/button');
    }
    clickMenuProduct() {
        this.menuProduct.click();
    }

    get menuProductSeeAll() {
        return $('//div[9]/a/span');
    }
    clickMenuProductSeeAll() {
        this.menuProductSeeAll.click();
    }

    get textH2El() {
        return $('//div[2]/div/div[1]/div/header/h2');
    }
    isDisplayedTextH2El() {
        this.textH2El.isDisplayed();
    }

    get networkBtn() {
        return $('//li[3]/span/a');
    }
    clickNetworkBtn() {
        this.networkBtn.click();
    }

    get smsApi() {
        return $('[href="/products/sms-api"] [class="sc-3e56386e-5 eVSvvX"]');
    }
    clickSmsApi() {
        this.smsApi.click();
    }

    get videoApi() {
        return $('[href="/products/video-api"] [class="sc-3e56386e-5 eVSvvX"]');
    }
    clickVideoApi() {
        this.videoApi.click();
    }

    get learnMoreLink() {
        return $('[class$="Fu mchNoDecorate"]');
    }
    clickLearnMoreLink() {
        this.learnMoreLink.click();
    }
    moveToLearnMoreLink() {
        this.learnMoreLink.moveTo();
    }

    get createFreeTrialBtn() {
        return $('[class$="Hd mchNoDecorate"]');
    }
    clickCreateFreeTrialBtn() {
        this.createFreeTrialBtn.click();
    }
    scrollIntoViewCreateFreeTrialBtn() {
        this.benefits.scrollIntoView();
    }

    get compareCosts() {
        return $('//div[8]/div/div[1]')
    }
    scrollIntoViewcCmpareCosts() {
        this.compareCosts.scrollIntoView();
    }
}

module.exports = new HomePage();
