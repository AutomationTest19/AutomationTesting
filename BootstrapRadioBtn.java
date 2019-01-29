package packageselenium;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BootstrapRadioBtn {

	public static void main(String args[])
	{
		System.setProperty("webdriver.chrome.driver","D:\\Selenium_Projects\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://seleniumpractise.blogspot.com/2016/08/how-to-automate-radio-button-in.html");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
		try {
			
			List<WebElement> radio_list = driver.findElements(By.xpath("//input[@name='lang' and @type='radio']"));
			
			for(int i=0;i<radio_list.size();i++)
			{
				WebElement element = radio_list.get(i);
				String value = element.getAttribute("value");
				System.out.println("Radio buttons are "+value);
				
				if(value.equalsIgnoreCase("PYTHON"))
				{
					element.click();
					break;
				}
			}
			
			List<WebElement> checkbox = driver.findElements(By.xpath("//input[@name='lang' and @type='checkbox']"));
			for(int i=0;i<checkbox.size();i++)
			{
				WebElement check_local=checkbox.get(i);
				String values= check_local.getAttribute("id");
				System.out.println("Checkbox values are "+values);
				
				if(values.equalsIgnoreCase("code"))
				{
					check_local.click();
					break;
				}
			}
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
	}
}
