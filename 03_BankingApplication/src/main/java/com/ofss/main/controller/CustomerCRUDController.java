package com.ofss.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Customer;
import com.ofss.main.service.CustomerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("customers")
public class CustomerCRUDController {
	@Autowired
	private CustomerService customerservice;
	
	@GetMapping("getallcustomers")
	public Iterable<Customer> getAllCustomers(){
		return customerservice.getAllCustomers();
	}
	
	@PostMapping("addnewcustomer")
	public Customer addNewCustomer(@RequestBody Customer customer) {
		return customerservice.addNewCustomer(customer);
	}
	
	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PostMapping("login")
	public Customer login(@RequestBody Customer customer) {
		return customerservice.loginCustomer(customer);
	}
	

}
