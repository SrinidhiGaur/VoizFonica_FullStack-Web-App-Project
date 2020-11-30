package com.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.model.Dongle;
import com.login.model.UserPlans;


public interface UserDongle extends JpaRepository<Dongle, Integer> {
	public Dongle findBydata(String data);
}
