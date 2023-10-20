const puppeteer = require('puppeteer') 


const generatePdf = async ( url ) => {
    // const browser = await puppeteer.launch({
    //     headless: 'false',
    //     defaultViewport: {
    //         width: 1080,
    //         height:1600,
    //         deviceScaleFactor: 1,
    //         // isMobile: false,
    //         // hasTouch: false,
    //         Landscape: true,
    //     },
    // });
    const browser = await puppeteer.launch({
        args: ['--no-sandbox']
      });
    const page = await browser.newPage();
    // await page.goto(url, {
    //     waitUntil: "networkidle0"
    // });

    await page.emulateMediaType("screen");
    await page.setContent(url, {  waitUntil: "networkidle0" })
    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: { left: "0.5cm", top: "2cm", right: "0.5cm", bottom: "2cm" },
    });
    await browser.close();
    return pdf;
}

module.exports = { generatePdf };