package com.ofss.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Account;
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
	
	@GetMapping("getallaccounts/{c_id}")
	public List<Account> getAllAccounts(@PathVariable int c_id){
		return customerservice.FindAccountByCustomerId(c_id);
	}
	
	@PostMapping("addnewcustomer")
	public Customer addNewCustomer(@RequestBody Customer customer) {
		return customerservice.addNewCustomer(customer);
	}
	
	@PostMapping("login")
	public Customer login(@RequestBody Customer customer) {
		return customerservice.loginCustomer(customer);
	}
	
	@PostMapping("addaccount/{c_id}")
	public Account addNewAccount(@RequestBody Account account, @PathVariable int c_id) {
		return customerservice.addNewAccount(account, c_id);
	}

}
