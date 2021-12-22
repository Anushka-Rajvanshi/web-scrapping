const puppeteer = require("puppeteer");
const fs = require("fs");

const scrape = async () => {
  const browser = await puppeteer.launch(); //browser initiate
  const page = await browser.newPage(); // opening a new blank page

  await page.setViewport({
    width: 1480,
    height: 680,
  });

  await page.goto("https://en.wikipedia.org/wiki/A#History", {
    waitUntil: "domcontentloaded",
  }); // navigate to url and wait until page loads completely
  await page.screenshot({ path: "screenshots/AHistory.png" }); //History

  await page.goto("https://en.wikipedia.org/wiki/A#Use_in_writing_systems", {
    waitUntil: "domcontentloaded",
  });
  await page.screenshot({ path: "screenshots/AUse-in-writing-systems.png" }); //use in writing systems

  await page.goto("https://en.wikipedia.org/wiki/A#Other_uses", {
    waitUntil: "domcontentloaded",
  });
  await page.screenshot({ path: "screenshots/AOther-uses.png" }); // other uses

  browser.close();
};

scrape();
