package com.login.repository;



import org.springframework.data.jpa.repository.JpaRepository;


import com.login.model.Offers;


public interface OffersRepo extends JpaRepository<Offers, Integer> {
	
}
