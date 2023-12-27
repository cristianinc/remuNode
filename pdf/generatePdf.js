const puppeteer = require('puppeteer') 


const generatePdf = async ( url ) => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox'],
        defaultViewport: {
            width: 1200,
            height:800,
            deviceScaleFactor: 1,
            // isMobile: false,
            // hasTouch: false,
            
        },
    });

    const page = await browser.newPage();
    // await page.goto(url, {
    //     waitUntil: "networkidle0"
    // });

    await page.emulateMediaType("screen");
    await page.setContent(url, {  waitUntil: "networkidle0" })
    const pdf = await page.pdf({
        format: "A4",
        landscape: true,
        printBackground: true,
        margin: { left: "0.5cm", top: "0.5cm", right: "0.5cm", bottom: "0.5cm" },
    });
    await browser.close();
    return pdf;
}

module.exports = { generatePdf };