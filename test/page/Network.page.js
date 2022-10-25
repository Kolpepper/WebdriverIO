class NetworkPage {

    get tryOurNetworkBtn() {
        return $('//main/div[1]/div[1]/div/div[2]/div/a');
    }
    clickTryOurNetworkBtn() {
        this.tryOurNetworkBtn.click();
    }

}

module.exports = new NetworkPage();