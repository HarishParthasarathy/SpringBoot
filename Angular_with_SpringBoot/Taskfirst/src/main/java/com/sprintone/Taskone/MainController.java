package com.sprintone.Taskone;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path="/demo")
public class MainController {

@Autowired
private UserRepository userrepo;

@CrossOrigin(origins="http://localhost:4200")
@GetMapping(path="/all")
public Iterable<User> getAllUsers() {
  // This returns a JSON or XML with the users
  return userrepo.findAll();
}

@GetMapping(path="/all/{id}")
public Optional<User> getUserbyId(@PathVariable(value="id") Integer empid ) {
  // This returns a JSON or XML with the users
  return userrepo.findById(empid);
}

@PostMapping(path="/add")
public String addNewUser (@RequestBody User u) {
	    	    
		User n = new User();
	    n.setFirstname(u.getFirstname());
	    n.setLastname(u.getLastname());
	    n.setEmail(u.getEmail());
	    userrepo.save(n);
	    return "Saved";	    
}

@PutMapping(path="/{id}")
public String updateUser(@PathVariable(value="id") Integer empid, @RequestBody User user) {
	
	User u= userrepo.getOne(empid);
	u.setFirstname(user.getFirstname());
	u.setLastname(user.getLastname());
	u.setEmail(user.getEmail());
	userrepo.save(u);
	return "Updated the employee";
}

@DeleteMapping(path="/{id}")
public String deleteUser(@PathVariable(value="id") Integer empid) {
	User u=userrepo.getOne(empid);
	userrepo.deleteById(empid);
	return "The user"+ u.getFirstname()+" "+u.getLastname()+" has been deleted";
	}
}

