package com.app.Entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GymClass {
	
/*
 * need to test annotation --> doesn't work for owner maybe
 * @JsonProperty(access = Access.READ_ONLY)
 * */
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
@Column(length=45)
private String className;

private Integer Duration;

private Integer Capacity;

private Date startDate;

private Date endDate;

@JsonIgnore
@ManyToOne
private Trainer trainer;

@JsonIgnore
@ManyToOne
private Owner owner;

@JsonIgnore
@OneToMany
private List<Member> membersInGym=new ArrayList<>();

}
