package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entities.GymClass;


public interface GymClassRepository extends JpaRepository<GymClass, Integer> {

	
}
