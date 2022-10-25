class SingUpPage {

    get acceptBtn() {
        return $('[class$="itIjRb"]');
    }
    clickAcceptBtn() {
        this.acceptBtn.click();
    } 

    get emailField() {
        return $('#email');
    }
    getValueEmailField() {
        this.emailField.getValue();
    }
    addValueEmailField() {
        this.emailField.addValue('test@gmail.com');
    }
    clickEmailField() {
        this.emailField.click();
    }

    get nameField() {
        return $('#full_name');
    }
    getValueNameField() {
        this.nameField.getValue();
    }
    addValueNameField() {
        this.nameField.addValue('test');
    }
    clickNameField() {
        this.nameField.click();
    }

    get passwordField() {
        return $('#password');
    }
    getValuePasswordField() {
        this.passwordField.getValue();
    }
    addValuePasswordField() {
        this.passwordField.addValue('test123');
    }
    clickPasswordField() {
        this.passwordField.click();
    }

    get logo() {
        return $('#Logo-Dark_svg__Layer_1');
    }
    clickLogo() {
        this.logo.click();
    }

    get googleSingUp() {
        return $('//div/button/span/span');
    }
    isDisplayedGoogleSingUp() {
        this.googleSingUp.isDisplayed();
    }

    get microsoftSingUp() {
        return $('//form/button/span/span');
    }
    isDisplayedMicrosoftSingUp() {
        this.microsoftSingUp.isDisplayed();
    }

    get promoBtn() {
        return $('//div[1]/div[4]/div/button');
    }
    isDisplayedPromoBtn() {
        this.promoBtn.isDisplayed();
    }
    clickPromoBtn() {
        this.promoBtn.click();
    }

    get promoField() {
        return $('#promo_code');
    }
    clickPromoField() {
        this.promoField.click();
    }
    addValuePromoField() {
        this.promoField.addValue('test');
    }

}

module.exports = new SingUpPage();