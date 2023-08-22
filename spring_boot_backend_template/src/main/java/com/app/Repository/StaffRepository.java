package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.Entities.Staff;

public interface StaffRepository extends JpaRepository<Staff, Integer> {

}
