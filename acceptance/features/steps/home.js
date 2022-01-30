const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const waitForSelector = require("../support/action/waitForSelector")

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/home")
});

When(/^page is loaded$/, async function () {
    await waitForSelector.call(this, ".home-container")
});
Then(/^User can see some of videos' title like$/, function () {
    // axios isteğini yap, videoları al
    // video compoenentini oluştur
});