package com.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.login.model.UserPostPlan;


public interface UserPostPlanRepo extends JpaRepository<UserPostPlan, Integer>  {
	public UserPostPlan findBydata(String data);
}
