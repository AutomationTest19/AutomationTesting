var webdriver = require('selenium-webdriver')
By = webdriver.By;  //loads an element in the page
until = webdriver.until;// until the element is loaded we need to wait

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().window().maximize();    // will maximize the window

driver.get('https://sandbox.veris.in/vms/register/');

driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/form/div[1]/div/input')).sendKeys("m@gmail.com");
driver.findElement(By.xpath('//*[@id="checkbox-signup"]')).click();

driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/form/div[2]/div/div/div[2]/button/span')).click();

//driver.wait(until.titleIs(' Veris View | Login'),3000);

   let a = driver.wait(async function() {
       let a=new Promise((resolve, reject)=>{
        driver.getTitle().then(function(title) {
            
            return title === 'Veris View | Login';
          },function(reject)
          {
              console.log("Reject "+reject)
          }).catch(function(msg)
          {
              console.log("Error is "+msg)
          });
       })
             
          }, 5000)
        
          //console.log(" waited ",a);
          a.then(function(msg)
          {
              console.log("Waited" +msg);
          },function(rejection)
          {
              console.log("Rejection in waiting "+rejection);
          }).catch(function(error)
          {
              console.log("promise error wait "+error);
          });
    

    driver.navigate().refresh().then(()=>{
    driver.getCurrentUrl().then((text)=>{
        console.log("Url "+text);
        if(text === 'https://sandbox.veris.in/vms/register/')
        {
            console.log("Test cases passed");
        }
        else{
            console.log("Test case failed");
        }
    },function(reject)
    {
        console.log("Promise Rejected error URL! "+reject)
    }).catch(function(Error)
    {
        console.log("Error in getting url !!!!! "+Error)
    })
},function(rejectrefresh)
{
    console.log("Promise rejected error refresh "+rejectrefresh);
}).catch(function(Error)
{
    console.log("Error in navigate  !!!!! "+Error)
})



