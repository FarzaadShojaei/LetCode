import { chromium } from "@playwright/test";

describe('Upload file',()=>{
    const filePath0='../videos/a.webm';
    const filePath1='../videos/b.webm';
    test("Upload File Using set input files",async()=>{
        const browser=await chromium.launch({
            headless:false
        })
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto('https://www.sendgb.com/');
        await page.setInputFiles("input[name='qqfile']",[filePath0,filePath1])


    })
    test("Upload using on function",async()=>{
        const browser=await chromium.launch({
            headless:false
        })
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto('https:/www.sendgb.com/');
        page.on("filechooser",async(filechooser)=>{
            await filechooser.setFiles([filePath0,filePath1])
        })

        await page.click(".example + div#drag-drop-upload",{force:true})
    })

})