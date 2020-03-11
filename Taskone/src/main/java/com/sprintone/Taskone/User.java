package com.sprintone.Taskone;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Alluserdetails")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@Column(name="Fname")
	private String firstname;
	
	private String lastname;
	
	@OneToOne(cascade= CascadeType.ALL)
	Userdetails userdetail;

	@OneToMany(targetEntity = Bookdetails.class,cascade= CascadeType.ALL)
	List<Bookdetails> bookdetail;
	
	@ManyToMany(targetEntity= Coursedetails.class,cascade = CascadeType.ALL)
	List<Coursedetails> coursedetail;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Userdetails getUserdetail() {
		return userdetail;
	}

	public void setUserdetail(Userdetails userdetail) {
		this.userdetail = userdetail;
	}

	public List<Bookdetails> getBookdetail() {
		return bookdetail;
	}

	public void setBookdetail(List<Bookdetails> bookdetail) {
		this.bookdetail = bookdetail;
	}

	public List<Coursedetails> getCoursedetail() {
		return coursedetail;
	}

	public void setCoursedetail(List<Coursedetails> coursedetail) {
		this.coursedetail = coursedetail;
	}

	
}
