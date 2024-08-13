package com.ofss.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ofss.main.domain.Customer;
import com.ofss.main.repository.CustomerRepository;

@Component
public interface CustomerService {

	public Iterable<Customer> getAllCustomers();
	
	public Customer addNewCustomer(Customer customer);
	
	public Customer loginCustomer(Customer customer);
}
