package com.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
@Entity
public class Transcationhistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String emailId;
private String phonenumber;
private String name;
private LocalDate date;
private LocalTime time;
//private String price;


public Transcationhistory() 
{	
	 LocalDate myObj = LocalDate.now();
	 this.date=myObj;
	 LocalTime time1 = LocalTime.now();
	 this.time=time1;
	
}
public Transcationhistory(int id, String emailId, String phonenumber, String name, LocalDate date, LocalTime time) {
	super();
	this.id = id;
	this.emailId = emailId;
	this.phonenumber = phonenumber;
	this.name = name;
	this.date = date;
	this.time = time;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getPhonenumber() {
	return phonenumber;
}
public void setPhonenumber(String phonenumber) {
	this.phonenumber = phonenumber;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public LocalDate getDate() {
	return date;
}
public void setDate(LocalDate date) {
	this.date = date;
}
public LocalTime getTime() {
	return time;
}
public void setTime(LocalTime time) {
	this.time = time;
}




	
	
}
