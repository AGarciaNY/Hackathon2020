const puppeteer = require('puppeteer');
const express = require('express');

// async function scrapePup(url){
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);

//     const [el] = await page.$x('//*[@id="chart"]/div/table/tbody/tr[1]/td[2]');
//     const txt = await el.getProperty('textContent');
//     const rawTxt = await txt.jsonValue();

//     console.log(rawTxt);

//     browser.close();
// }


const app = express();

app.get('/', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www1.nyc.gov/site/doh/covid/covid-19-data.page');
    
    const [el] = await page.$x('//*[@id="chart"]/div/table/tbody/tr[1]/td[2]');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    res.send(rawTxt);

    await browser.close();
})

app.listen(3000);