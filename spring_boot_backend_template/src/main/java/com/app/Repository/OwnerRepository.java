package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entities.Owner;


public interface OwnerRepository extends JpaRepository<Owner, Integer> {

	
}
