
var webdriver= require('selenium-webdriver');

By=webdriver.By;
until=webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get("https://library-app.firebaseapp.com/");
driver.manage().window().maximize();

driver.findElement(By.xpath('//*[@id="ember14"]')).sendKeys("mansi.sahu@veris.in").then(
    function()
    {
        console.log("Able to write in the username text field");
    }
);
// driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/form/div[2]/div/input")).sendKeys("123456").then(
//     function()
//     {
//         console.log("Able to write in the username text field");
//     }
// );
// remember me
// driver.findElement(By.xpath('//*[@id="checkbox-signup"]')).click().then(
//     function()
//     {
//         console.log("checkbox clicked");
//     }
// )
//driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/form/div[3]/div/div[1]/div/button/span')).click();
driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div[2]/button')).getText().then(
    
        function(txt)
        {
            console.log("The text of the button is "+txt);
        });
// fecthing the elementsof navigation bar
driver.findElement(By.xpath('//*[@id="main-navbar"]')).then(
    function(elements)  
    {
        elements.map(function(el)
        {
            el.getText().then(function(txt)
            {
                console.log("Elements of the navbar is "+txt);
            });
        });
    });

    driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div[2]/button')).click();
    // getting the alert text
    driver.sleep(10000);
    driver.findElement(By.css('alert alert-success')).getText().then(
        function(txt)
        {
           // console.log("Element found")
            console.log("Alert success tag is "+txt)
        }
    )

    