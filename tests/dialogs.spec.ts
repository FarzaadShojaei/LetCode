import { Browser,BrowserContext,chromium,ElementHandle,Page } from "@playwright/test";

describe("Learn how to handle input fields",()=>{
let browser: Browser;
let context:BrowserContext;
let page:Page;
beforeAll(async()=>{
    browser=await chromium.launch({
        headless:false

    });
    context=await browser.newContext();
    page=await context.newPage();
    await page.goto("https://letcode.in/alert")

})
test("Handle dialogs",async()=>{
    const ele=await page.$("#prompt");
    await ele?.click()
    page.on("dialog",(dialog)=>{
        console.log('Message:'+ dialog.message());
        console.log('Default Value'+dialog.defaultValue)
        console.log('Type'+ dialog.type());
        dialog.accept("Hello Farzad");
        // dialog.dismiss()
    })
   
})




})