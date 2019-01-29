package packageselenium;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BootStrapdropdown {
	public static void main(String[] args) throws InterruptedException {
		
		// tetsing the bootstrap menus
		System.setProperty("webdriver.chrome.driver","D:\\Selenium_Projects\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html");
		driver.manage().window().maximize();
		//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.id("menu1")).click();
		Thread.sleep(2000);
		List<WebElement> el =driver.findElements(By.xpath("//ul[@class='dropdown-menu']//li/a"));
		Thread.sleep(2000);
		
		System.out.println("printing");
		for(int i=0;i<el.size();i++)
		{
			WebElement element = el.get(i);
			Thread.sleep(2000);
			
			String innerhtml =element.getAttribute("innerHTML");
			Thread.sleep(2000);
			
			System.out.println(innerhtml);
			Thread.sleep(4000);
			if(innerhtml.contentEquals("JavaScript")) {
				element.click();
				Thread.sleep(2000);
				System.out.println("element clicked");
				break;
			}
		}
		
	}
}
