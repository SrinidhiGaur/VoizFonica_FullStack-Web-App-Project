package com.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import com.login.model.Admin;
import com.login.model.Dongle;
import com.login.model.Offers;
import com.login.model.UserPlans;
import com.login.model.UserPostPlan;
import com.login.repository.Adminrepo;
import com.login.repository.OffersRepo;
import com.login.repository.UserDongle;
import com.login.repository.UserPostPlanRepo;
import com.login.repository.Userplansrepo;

@SpringBootApplication
public class RegistrationApplication
{
	public static void main(String[] args) 
	{
		SpringApplication.run(RegistrationApplication.class, args);
	}
}
@Component
class DemoCommandLineRunner implements CommandLineRunner
{

	@Autowired
	private  Adminrepo ad;
	
	@Autowired
	private  Userplansrepo upr;
	
	@Autowired
	private UserPostPlanRepo uppr;
	
	@Autowired
	private UserDongle udr;
	
	
	@Autowired
	private OffersRepo ufr;

	@Override
	public void run(String... args) throws Exception 
	{
	

		Admin adm=new Admin();
		adm.setEmailId("Admin");
		adm.setPassword("adminteam3");
		ad.save(adm);

		
		UserPlans up = new UserPlans();
		up.setData("1.5GB/Day");
		up.setPrice("Rs 219/-");
		up.setValidity("28 Days");	
		upr.save(up);
		
		UserPlans up1 = new UserPlans();
		up1.setData("2.5GB/Day");
		up1.setPrice("Rs 319/-");
		up1.setValidity("28 Days");
		upr.save(up1);
		
		UserPlans up2 = new UserPlans();
		up2.setData("3GB/Day");
		up2.setPrice("Rs 349/-");
		up2.setValidity("28 Days");
		upr.save(up2);
		
		UserPlans up3 = new UserPlans();
		up3.setData("2.5GB/Day");
		up3.setPrice("Rs 429/-");
		up3.setValidity("56 Days");
		upr.save(up3);
		
		UserPlans up4 = new UserPlans();
		up4.setData("4GB/Day");
		up4.setPrice("Rs 419/-");
		up4.setValidity("28 Days");
		upr.save(up4);
		
		
		UserPostPlan upp1 = new UserPostPlan();
		upp1.setData("49GB (Basic Plan)");
		upp1.setPrice("Rs 499/-");
		upp1.setValidity("---");
		uppr.save(upp1);
		
		
		UserPostPlan upp2 = new UserPostPlan();
		upp2.setData("150GB (Family Plan)");
		upp2.setPrice("Rs 999/-");
		upp2.setValidity("---");
		uppr.save(upp2);
		
		UserPostPlan upp3 = new UserPostPlan();
		upp3.setData("Unlimited data (Unlimited Plan)");
		upp3.setPrice("Rs 1599/-");
		upp3.setValidity("---");
		uppr.save(upp3);
		
		Dongle ud = new Dongle();
		ud.setData("42 GB (1.5 GB/Day)");
		ud.setPrice("Rs 199/-");
		ud.setValidity("28 days");
		udr.save(ud);
		
		Dongle ud1 = new Dongle();
		ud1.setData("102 GB (1.5 GB/Day)");
		ud1.setPrice("Rs 399/-");
		ud1.setValidity("56 days");
		udr.save(ud1);

		Dongle ud2 = new Dongle();
		ud2.setData("126 GB (1.5 GB/Day)");
		ud2.setPrice("Rs 555/-");
		ud2.setValidity("84 days");
		udr.save(ud2);
		
		Dongle ud3 = new Dongle();
		ud3.setData("504 GB (1.5 GB/Day)");
		ud3.setPrice("Rs 2121/-");
		ud3.setValidity("336 days");
		udr.save(ud3);

		Offers useroffer = new Offers();
		useroffer.setOffers("Flat Rs 30/- OFF");
		useroffer.setPrice("Rs 429/-");
		useroffer.setDiscription("Get ₹30 off on charge of ₹429 ");
		ufr.save(useroffer);
		
		Offers useroffer1 = new Offers();
		useroffer1.setOffers("Free upto 6GB data");
		useroffer1.setPrice("Rs 219/-");
		useroffer1.setDiscription("Get EXTRA data on recharge above ₹219 ");
		ufr.save(useroffer1);
		
		Offers useroffer2 = new Offers();
		useroffer2.setOffers("Save on recharges");
		useroffer2.setPrice("No limit");
		useroffer2.setDiscription("On your 1st transcation on VoizFonica web application ");
		ufr.save(useroffer2);
		
		

		Offers useroffer3 = new Offers();
		useroffer3.setOffers("Monthly cashbacks");
		useroffer3.setPrice("Rs 40/-");
		useroffer3.setDiscription("Upto ₹40 cashback ");
		ufr.save(useroffer3);
		
	}
	
	
}



