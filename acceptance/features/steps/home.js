const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const waitForSelector = require("../support/action/waitForSelector")
const assert = require("assert");

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/home")
});

When(/^page is loaded$/, async function () {
    await waitForSelector.call(this, ".home-container")
});

Then(/^User can see some of videos' title like$/, async function (arr) {
    const selector = ".video-container"
    for (let [videoName] of arr.rawTable) {
        let a = await this.page.$$eval (
            selector,
            async (items, videoName) => {
                const video = items.find(item => item.querySelector("#title").textContent.includes(videoName))
                console.log(video)
                return !!video
            },
            videoName
        )
        console.log(a)
        assert.strictEqual(a, true)
    }
});