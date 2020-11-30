package com.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.model.Transcationhistory;


public interface TranhistoryRepo extends JpaRepository<Transcationhistory, Integer> {

}
