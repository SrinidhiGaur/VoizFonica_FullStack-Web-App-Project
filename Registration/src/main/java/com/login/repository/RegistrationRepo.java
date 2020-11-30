package com.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.model.User;

public interface RegistrationRepo extends JpaRepository<User, Integer>
{
	public User findByEmailId(String emailId);
	public User findByEmailIdAndPassword(String email, String password);
}
 