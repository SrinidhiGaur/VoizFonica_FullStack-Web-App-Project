package com.login.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.login.model.UserPlans;

public interface Userplansrepo extends JpaRepository<UserPlans, Integer> {
	public UserPlans findBydata(String data);
//	public Optional<UserPlans> findById(int Id);
}
