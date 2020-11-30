package com.login.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.login.model.Admin;
import com.login.model.Dongle;
import com.login.model.Offers;
import com.login.model.Transcationhistory;
import com.login.model.User;
import com.login.model.UserPlans;
import com.login.model.UserPostPlan;
import com.login.repository.*;


@Service
public class RegistrationServices {
@Autowired
	private RegistrationRepo repo;
@Autowired
private Adminrepo repo1;

@Autowired
private Userplansrepo upr;

@Autowired
private UserPostPlanRepo uppr;

@Autowired
private UserDongle ud;

@Autowired
private OffersRepo uf;

@Autowired
private TranhistoryRepo tr;


	public User saveUser(User user) 
	{
	return repo.save(user);
	}
	
	public UserPlans saveUserplan(UserPlans up) 
	{
	return upr.save(up);
	}
	public UserPostPlan saveUserpostplan(UserPostPlan up) 
	{
	return uppr.save(up);
	}
	
	public Dongle saveUserdplan(Dongle d) 
	{
	return ud.save(d);
	}
	public Offers saveoffer(Offers d) 
	{
	return uf.save(d);
	}
	
	public Transcationhistory savetran(Transcationhistory d) 
	{
	return tr.save(d);
	}
	
public User fetchUserByEmailid(String email) {
return	repo.findByEmailId(email);
	
}
public UserPlans fetchUserBydata(String data) {
return	upr.findBydata(data);	
}
public UserPostPlan fetchUserBydatapost(String data) {
return	uppr.findBydata(data);	
}
public Dongle fetchUserBydatdongle(String data) {
return	ud.findBydata(data);	
}
public User fetchUserByEmailIdAndPassword(String email, String password) {
return repo.findByEmailIdAndPassword(email, password);

}

public Admin fetchAdminByEmailIdAndPassword(String email, String password) {
return  repo1.findByEmailIdAndPassword(email, password);

}


public java.util.List<User>fetchuserList(){
	return repo.findAll();
}


public java.util.List<Transcationhistory>fetchusertran(){
	return tr.findAll();
}

public java.util.List<UserPlans>fetchuserpreplans(){
	return upr.findAll();
}

public java.util.List<UserPostPlan>fetchuserpostplans(){
	return uppr.findAll();
}

public java.util.List<Dongle>fetchuserDongleplans(){
	return  ud.findAll();
}
public Optional<User> fetchUserById(int id) {
return	repo.findById(id);
	
}

public Optional<User> fetchUserByIdforinfo(int id) {
return	repo.findById(id);
	
}

public  Optional<UserPlans> fetchpreplanById(int id) {
return	upr.findById(id);
	
}

public  Optional<UserPostPlan> fetchpostplanById(int id) {
return	uppr.findById(id);
	
}

public  Optional<Offers> fetchoffersById(int id) {
return	uf.findById(id);
	
}

public  Optional<Dongle> fetchdongleplanById(int id) {
return	ud.findById(id);
	
}
public void deleteUserById(int id) {
		repo.deleteById(id);		
}
public void deleteUserofferById(int id) {
	uf.deleteById(id);		
}

public java.util.List<Offers> fetchuserOffers() {
	return uf.findAll();
}


public void deleteUserplanById(int id) {
	upr.deleteById(id);		
}
public void deleteUserpostplanById(int id) {
	uppr.deleteById(id);		
}
public void deleteUserdplanById(int id) {
	ud.deleteById(id);		
}

public User upUser (Integer id,String password) {
	Optional<User> d=repo.findById(id);
	if(d.isPresent()) {
		User u=d.get();
		u.setPassword(password);
	}

User u=repo.save(d.get());
return u;
}

public User upUserServiceType (Integer id,String type) {
	Optional<User> d=repo.findById(id);
	if(d.isPresent()) {
		User u=d.get();
		u.setServicetype("Post-Paid");
	}

User u=repo.save(d.get());
return u;
}


public UserPlans upUserplan (Integer id,String data,String price,String validity) {
	Optional<UserPlans> d=upr.findById(id);
	if(d.isPresent()) {
		UserPlans u=d.get();
		u.setData(data);
		u.setPrice(price);
		u.setValidity(validity);
	}

UserPlans u=upr.save(d.get());
return u;
}


public UserPostPlan upUserpostplan (Integer id,String data,String price) {
	Optional<UserPostPlan> d=uppr.findById(id);
	if(d.isPresent()) {
		UserPostPlan u=d.get();
		u.setData(data);
		u.setPrice(price);
		
	}
	
UserPostPlan u=uppr.save(d.get());
return u;
}
public Dongle upUserdplan (Integer id,String data,String price,String validity) {
	Optional<Dongle> d=ud.findById(id);
	if(d.isPresent()) {
		Dongle u=d.get();
		u.setData(data);
		u.setPrice(price);
		u.setValidity(validity);
	}

Dongle u=ud.save(d.get());
return u;
}

public Offers upUseroffer (Integer id,String price,String des,String offer) {
	Optional<Offers> d=uf.findById(id);
	if(d.isPresent()) {
		Offers u=d.get();
		u.setPrice(price);
		u.setDiscription(des);
		u.setOffers(offer);
	}

Offers u=uf.save(d.get());
return u;
}





}