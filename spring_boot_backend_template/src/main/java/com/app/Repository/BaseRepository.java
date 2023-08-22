package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.app.Entities.BaseEntity;


public interface BaseRepository extends JpaRepository<BaseEntity, Integer> {

	BaseEntity findBaseEntityByEmailAndPassword(String email,String password);
	
	@Query(value="SELECT role FROM base_entity WHERE id=?1",nativeQuery = true)
	String findRoleById(Integer id);
}
