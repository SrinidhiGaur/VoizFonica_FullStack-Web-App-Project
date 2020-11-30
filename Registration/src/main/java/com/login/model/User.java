package com.login.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String emailId;
private String password;
private String firstname;
private String lastname;
private Date dateofbirth;
private long phonenumber;
private long aadharnumber;
private String servicetype;

public User() {
}

public User(int id, String emailId, String password, String firstname, String lastname, Date dateofbirth,
		long phonenumber, long aadharnumber, String servicetype) {
	super();
	this.id = id;
	this.emailId = emailId;
	this.password = password;
	this.firstname = firstname;
	this.lastname = lastname;
	this.dateofbirth = dateofbirth;
	this.phonenumber = phonenumber;
	this.aadharnumber = aadharnumber;
	this.servicetype = servicetype;
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

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getFirstname() {
	return firstname;
}

public void setFirstname(String firstname) {
	this.firstname = firstname;
}

public String getLastname() {
	return lastname;
}

public void setLastname(String lastname) {
	this.lastname = lastname;
}

public Date getDateofbirth() {
	return dateofbirth;
}

public void setDateofbirth(Date dateofbirth) {
	this.dateofbirth = dateofbirth;
}

public long getPhonenumber() {
	return phonenumber;
}

public void setPhonenumber(long phonenumber) {
	this.phonenumber = phonenumber;
}

public long getAadharnumber() {
	return aadharnumber;
}

public void setAadharnumber(long aadharnumber) {
	this.aadharnumber = aadharnumber;
}

public String getServicetype() {
	return servicetype;
}

public void setServicetype(String servicetype) {
	this.servicetype = servicetype;
}



}
