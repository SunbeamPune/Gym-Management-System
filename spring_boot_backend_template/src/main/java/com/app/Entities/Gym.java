package com.app.Entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Gym {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 45)
	private String gymName;
	@Column(length = 45)
	private String location;
	@OneToOne
	private Owner owner;
	
	@JsonIgnore
	public List<GymClass> getAllGymClasses()
	{
		if(this.owner!=null)
		{
			return this.owner.getClasses();
		}
		return null;
	}
}
