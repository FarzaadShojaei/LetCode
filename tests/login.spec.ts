import { chromium } from "@playwright/test";
import { test, expect } from '@playwright/test';


describe('Launch Browser',()=>{
    test('Recorded Script',async()=>{

test('test', async ({ page }) => {
  await page.goto('https://letcode.in/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Enter registered email' }).click();
  await page.getByRole('textbox', { name: 'Enter registered email' }).fill('farzaadshojaei@gmail.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('Farzad@79');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByPlaceholder('Enter password').dblclick();
  await page.getByPlaceholder('Enter password').fill('Farzad79');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('link', { name: 'Explore Workspace' }).click();
  await page.getByRole('link', { name: 'All in One' }).click();
  await page.locator('#firstname').click();
  await page.locator('#firstname').fill('Farzad');
  await page.locator('#lasttname').click();
  await page.locator('#lasttname').fill('Shojaei');
  await page.getByPlaceholder('Email input').click();
  await page.getByPlaceholder('Email input').fill('farzaadshojaei@gmail.com');
  await page.getByPlaceholder('Address Line-1').click();
  await page.getByPlaceholder('Phone Number').click();
  await page.getByPlaceholder('Phone Number').fill('9');
  await page.getByPlaceholder('Phone Number').dblclick();
  await page.getByPlaceholder('Phone Number').fill('978');
  await page.getByPlaceholder('Phone Number').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Phone Number').fill('7986986876');
  await page.getByPlaceholder('Address Line-1').click();
  await page.getByPlaceholder('Address Line-1').fill('8');
  await page.getByPlaceholder('Address Line-2').click();
  await page.getByPlaceholder('Address Line-2').fill('99');
  await page.getByPlaceholder('State').click();
  await page.getByPlaceholder('State').fill('Uta');
  await page.locator('form div').filter({ hasText: 'Postal-CodeCountryAfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAng' }).getByRole('combobox').selectOption('United States');
  await page.getByLabel('Male', { exact: true }).check();
  await page.locator('#Date').fill('2000-01-14');
  await page.getByText('I agree to the terms and conditions').click();
});

    })

xtest('Open Letcode',async()=>{
const browser=await chromium.launch({
headless:false

})
const context=await browser.newContext({
  recordVideo:{
    dir: "./videos/",
    size :{
      width:800,
      height:800
    }
  }
});
const page = await context.newPage();
await page.goto('https://letcode.in/')
await page.click("tex=Log in");
await page.fill("input[name='email']","farzaadshojaei@gmail.com")
await page.fill("input[name = 'password']","Farzad79")
await page.click('button:text("LOGIN")')
await page.click('"Sign Out"')
await browser.close()



})




})