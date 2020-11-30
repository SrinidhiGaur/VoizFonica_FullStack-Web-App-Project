package com.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String emailId;

public Admin() {}

public Admin( String emailId, String password) {
	super();
	
	this.emailId = emailId;
	this.password = password;
}

private String password;

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


}