import { chromium } from "@playwright/test";

describe('Launch Browser',()=>{
test('Open Letcode',async()=>{
const browser=await chromium.launch({
headless:false

})
const context=await browser.newContext();
const page = await context.newPage();
await page.goto('https://letcode.in/')
await page.click("tex=Log in");
await page.fill("input[name='email']","shojaeifarzad79@yahoo.com")
await page.fill("input[name = 'password']","12314")
await page.click('button:text("LOGIN")')
await page.click('"Sign Out"')
await browser.close()



})




})