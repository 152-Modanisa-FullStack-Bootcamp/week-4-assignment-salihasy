const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const waitForSelector = require("../support/action/waitForSelector")
const checkUrlContains = require("../support/check/checkUrlContains")
const assert = require("assert");

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/home")
});

When(/^page is loaded$/, async function () {
    // We wait for the root element to render to see if the page is loaded
    await waitForSelector.call(this, ".home-container")
});

Then(/^User can see some of videos' title like$/, async function (arr) {
    const selector = ".video-container"
    for (let [videoName] of arr.rawTable) {
        let video = await this.page.$$eval (
            selector,
            // We find each element inside the root element one by one and find the one whose title is equal to videoName
            async (items, videoName) => {
                const video = items.find(item => item.querySelector("#title").textContent.includes(videoName))
                //If the element we want is not found, the video will be undefined, but since we want it to pass true or false, we get the inverse's inverse.
                return !!video
            },
            videoName
        )
        assert.strictEqual(video, true)
    }
});


Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/home")
});

When(/^User clicks "([^"]*)" video$/, async function (videoName) {
    const selector = ".video-container"
    await this.page.$$eval (
        selector,
        // We find each element inside the root element one by one and find the one whose title is equal to videoName
        async (items, videoName) => {
            const video = items.find(item => item.querySelector("#title").textContent.includes(videoName))
            //We click on the element we find.
            await video.querySelector("#video-image").click()
        },
        videoName
    )
    await this.page.waitForTimeout(2000)
});

Then(/^User should see watch url correctly$/, async function () {
    // Since the element we clicked has an id of 2, we check if it goes to the url with an id value of 2.
    await checkUrlContains.call(this, false, "/watch?id=2")
    await this.page.waitForTimeout(2000)
});

When(/^User hovers "([^"]*)" video$/, async function (videoName) {
    const elements = await this.page.$$(".video-container");
    this.temp = false;
    // these operations will repeat for each element of the video container
    for (let element of elements) {
        // we got the title element of the element we have
        let title = await element.$("#title");
        // we found the textContent of the title
        const nameTextContent = (await this.page.evaluate(video => video.textContent, title)).trim();
        // If textContent is equal to videoName, we click on this element of the video container.
        if(nameTextContent === videoName) {
            await element.hover();
            // And we set the value of this.temp to true, because of "this" we will be able to access this variable from the following "then".
            this.temp = true;
            await this.page.waitForTimeout(2000);
            assert.strictEqual(videoName, nameTextContent);
        }
    }
});

Then(/^User should see hovered image$/, async function () {
    await this.page.waitForTimeout(2000);
    assert.strictEqual(this.temp, true);
});