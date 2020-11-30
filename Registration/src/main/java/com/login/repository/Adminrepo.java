package com.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.model.Admin;




public interface Adminrepo extends JpaRepository<Admin, Integer> {
	
	public Admin findByEmailIdAndPassword(String email, String password);

}
