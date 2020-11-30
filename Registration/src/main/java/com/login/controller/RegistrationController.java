package com.login.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.login.SmtpMailSender;
import org.springframework.web.bind.annotation.RestController;

import com.login.SmtpMailSender;
import com.login.model.Admin;
import com.login.model.Dongle;
import com.login.model.Offers;
import com.login.model.User;
import com.login.model.UserPlans;
import com.login.model.Transcationhistory;
import com.login.model.UserPostPlan;
import com.login.service.RegistrationServices;

@RestController
public class RegistrationController {
 
	String name;
	@Autowired
	private  RegistrationServices service;
	@Autowired
    private SmtpMailSender smtpMailSender;
	
	
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	
	public User registerUser(@RequestBody User user) throws Exception
	{
		String tempEmailId=user.getEmailId();
		if(tempEmailId !=null && !"".equals(tempEmailId)) {
		User userobj=service.fetchUserByEmailid(tempEmailId);
		if(userobj !=null) {
			throw new Exception("User with "+tempEmailId+"is already exists");
		}
	}
	User userObj=null;
	userObj=service.saveUser(user);
	
//smtpMailSender.send(tempEmailId, "VoixFonica Team - 3", "Thank you for registering to VoizFonica. Registration successfull");
	
	return userObj;
}
	
	
	
	
	@PostMapping("/createuser")
	@CrossOrigin(origins = "http://localhost:4200")
	
	public User createuser(@RequestBody User user) throws Exception 
{
		user.setId(user.getId()+1);
		String tempEmailId=user.getEmailId();
		if(tempEmailId !=null && !"".equals(tempEmailId)) {
		User userobj=	service.fetchUserByEmailid(tempEmailId);
		if(userobj !=null) {
			throw new Exception("User with "+tempEmailId+"is already exists");
		}
	}
	User userObj=null;
	userObj=service.saveUser(user);
	return userObj;
}

	
	@PostMapping("/createuserpreplan")
	@CrossOrigin(origins = "http://localhost:4200")
	
	public UserPlans createuserplan(@RequestBody UserPlans up) throws Exception 
{
		String data=up.getData();
		if(data !=null && !"".equals(data)) {
		UserPlans userobj=service.fetchUserBydata(data);
		if(userobj !=null) {
			throw new Exception("Userplan with "+data+"is already exists");
		}
	}
	UserPlans userObj=null;
	userObj=service.saveUserplan(up);
	return userObj;
}
	
	@PostMapping("/createuserpostplan")
	@CrossOrigin(origins = "http://localhost:4200")
	
	public UserPostPlan createuserpostplan(@RequestBody UserPostPlan upp) throws Exception 
{
		String data=upp.getData();
		if(data !=null && !"".equals(data)) {
		UserPostPlan userobj=service.fetchUserBydatapost(data);
		if(userobj !=null) {
			throw new Exception("Userplan with "+data+"is already exists");
		}
	}
	UserPostPlan userObj=null;
	userObj=service.saveUserpostplan(upp);
	return userObj;
}
	
	@PostMapping("/createuserdplan")
	@CrossOrigin(origins = "http://localhost:4200")
	
	public Dongle createuserdplan(@RequestBody Dongle d) throws Exception 
{
		String data=d.getData();
		if(data !=null && !"".equals(data)) {
		Dongle userobj=service.fetchUserBydatdongle(data);
		if(userobj !=null) {
			throw new Exception("Userplan with "+data+"is already exists");
		}
	}
	Dongle userObj=null;
	userObj=service.saveUserdplan(d);
	return userObj;
}
	
	
	@PostMapping("/createuseroffers")
	@CrossOrigin(origins = "http://localhost:4200")
	
	public Offers createuseroffers(@RequestBody Offers o) throws Exception 
{

	Offers userObj=null;
	userObj=service.saveoffer(o);
	return userObj;
}
	
	
	@PostMapping("/transcations")
	@CrossOrigin(origins = "http://localhost:4200")
	public  Transcationhistory transcations(@RequestBody Transcationhistory o) throws Exception 
{
	Transcationhistory userObj=null;
	userObj=service.savetran(o);
	return userObj;
}
	
	
	
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")

	public User loginUser(@RequestBody User user) throws Exception {
	String tempEmailId	=user.getEmailId();
	String tempPass		=user.getPassword();
		User userObj=null;
			if(tempEmailId !=null && tempPass !=null) 
			{
				userObj=service.fetchUserByEmailIdAndPassword(tempEmailId,tempPass);
				name=user.getFirstname();
			}
	if(userObj == null)
	{
			throw new Exception("Bad credentials username and paswword miss match ");
	}
		return userObj;
	
}

	@PostMapping("/adminlogin")
	@CrossOrigin(origins = "http://localhost:4200")

	public Admin adminLogin(@RequestBody Admin admin) throws Exception {
	String tempEmailId	=admin.getEmailId();
	String tempPass		=admin.getPassword();
		Admin userObj=null;
			if(tempEmailId !=null && tempPass !=null) 
			{
				userObj=service.fetchAdminByEmailIdAndPassword(tempEmailId,tempPass);
				
			}
	if(userObj == null)
	{
			throw new Exception("Bad credentials username and paswword miss match ");
	}
		return userObj;
	
}
	
	@GetMapping("/displayuserall")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<User> fetchuserList(){
	List<User> users=new ArrayList<User>();
	users=service.fetchuserList();
	return users;
}


	@GetMapping("/displayuser/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User fetchUserById(@PathVariable int id) 
	{
		return service.fetchUserById(id).get();
	}	
	

	@GetMapping("/userinfo/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User fetchUserByIdforinfo(@PathVariable int id) 
	{
		return service.fetchUserById(id).get();
	}	
	
	@GetMapping("/preplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public UserPlans fetchpreplanById(@PathVariable int id) 
	{
		return service.fetchpreplanById(id).get();
	}
	
	
	@GetMapping("/postplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public UserPostPlan fetchpostplanById(@PathVariable int id) 
	{
		return service.fetchpostplanById(id).get();
	}
	

	@GetMapping("/offers/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Offers fetchoffersById(@PathVariable int id) 
	{
		return service.fetchoffersById(id).get();
	}
	
	
	
	@GetMapping("/dongleplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Dongle fetchdongleplanById(@PathVariable int id) 
	{
		return service.fetchdongleplanById(id).get();
	}
	
	
	
	@DeleteMapping("/deleteuser/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteUserById(@PathVariable("id") Integer id) {
		 service.deleteUserById(id);
	}
	
	@DeleteMapping("/deleteuserplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteUserplanById(@PathVariable("id") Integer id) {
		 service.deleteUserplanById(id);
	}
	
	@DeleteMapping("/deleteuserpostplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteUserpostplanById(@PathVariable("id") Integer id) {
		 service.deleteUserpostplanById(id);
	}
	@DeleteMapping("/deleteuserdplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteUserdplanById(@PathVariable("id") Integer id) {
		 service.deleteUserdplanById(id);
	}
	@DeleteMapping("/deleteuseroffer/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteUserofferById(@PathVariable("id") Integer id) {
		 service.deleteUserofferById(id);
	}
	
	
	
	@PutMapping("/updateuser/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User UpdateUser(@PathVariable ("id") Integer id,@RequestBody User user) {
		String n=user.getPassword();
		return service.upUser(id,n);
	}
	
	

	@PutMapping("/switchtopost/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User UpdateServiceType(@PathVariable ("id") Integer id,@RequestBody User user) {
		String n=user.getServicetype();
		return service.upUserServiceType(id,n);
	}
	
	
	@PutMapping("/updateuserplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public UserPlans UpdateUserplan(@PathVariable ("id") Integer id,@RequestBody UserPlans up) {
		String n=up.getData();
		String n1=up.getPrice();
		String n2=up.getValidity();
		return service.upUserplan(id, n, n1, n2);
	}
	
	@PutMapping("/updateuserpostplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public UserPostPlan UpdateUserpostplan(@PathVariable ("id") Integer id,@RequestBody UserPostPlan up) {
		String n=up.getData();
		String n1=up.getPrice();
	
		return service.upUserpostplan(id, n, n1);
	}
	@PutMapping("/updateuserdplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Dongle UpdateUserdplan(@PathVariable ("id") Integer id,@RequestBody Dongle d) {
		String n=d.getData();
		String n1=d.getPrice();
		String n2=d.getValidity();
	
		return service.upUserdplan(id, n, n1,n2);
	}
	@PutMapping("/updateuseroffer/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Offers UpdateUseroffer(@PathVariable ("id") Integer id,@RequestBody Offers up) {
		
		
		String n=up.getPrice();
		String n1=up.getDiscription();
		String n2=up.getOffers();
		return service.upUseroffer(id, n, n1, n2);
	}

	@GetMapping("/displayuserpreplans")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<UserPlans> fetchuserpreplans(){
	List<UserPlans> userpreplans=new ArrayList<UserPlans>();
	userpreplans=service.fetchuserpreplans();
	return userpreplans;
	}
	
	@GetMapping("/displayuserpostplans")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<UserPostPlan> fetchuserpostplans(){
	List<UserPostPlan> userpostplans=new ArrayList<UserPostPlan>();
	userpostplans=service.fetchuserpostplans();
	return userpostplans;
	}
	
	@GetMapping("/displayuserdongleplans")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Dongle> fetchuserDongleplans(){
	List<Dongle> userdongleplans=new ArrayList<Dongle>();
	userdongleplans=service.fetchuserDongleplans();
	return userdongleplans;
	}
	
	@GetMapping("/displayuseroffers")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Offers> fetchuserOffers(){
	List<Offers> useroffers=new ArrayList<Offers>();
	useroffers=service.fetchuserOffers();
	return useroffers;
	}
	
	@GetMapping("/tranhistory")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Transcationhistory> fetchusertran(){
	List<Transcationhistory> t=new ArrayList<Transcationhistory>();
	t=service.fetchusertran();
	return t;
	}
	
}
