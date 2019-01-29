package packageselenium;

import java.util.List;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestPractice {

	public static void main(String[] args) throws InterruptedException {

		System.setProperty("webdriver.chrome.driver","D:\\Selenium_Projects\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://newtours.demoaut.com/");
		driver.manage().window().maximize();
		WebElement element;
		System.out.println("Fetching the list of web elements having the tag a");
		List<WebElement> objLinks = driver.findElements(By.tagName("a"));
		for(WebElement al:objLinks)
		{
			String s = al.getText();
			System.out.println(s);
		}
		
		//element=driver.findElement(By.linkText("REGISTER"));
		
		element=driver.findElement((By.partialLinkText("REGIST")));
		
		element.click();
		Thread.sleep(2000);
		 element = driver.findElement(By.name("firstName"));
		element.sendKeys("Mansi");
		Thread.sleep(1000);
		element =driver.findElement(By.name("lastName"));
		element.sendKeys("Sahu");;
		Thread.sleep(2000);
		element =driver.findElement(By.xpath("/html/body/div/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[4]/td[2]/input"));
		element.sendKeys("9993483676");
		element =driver.findElement(By.id("userName"));
		element.sendKeys("mansi@gmail.com");
		
		
		
	}
}
