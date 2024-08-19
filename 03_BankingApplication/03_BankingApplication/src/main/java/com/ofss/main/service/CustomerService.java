package com.ofss.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.repository.CustomerRepository;

@Component
public interface CustomerService {

	public Iterable<Customer> getAllCustomers();
	
	public Customer addNewCustomer(Customer customer);
	
	public Customer loginCustomer(Customer customer);
	
	public List<Account> FindAccountByCustomerId(int c_id);
//	public List<Account> FindAccountByCustomerId(Customer customer);
	
	public Account addNewAccount(Account account,int c_id);
	
	public Customer getCustomerbyId(int id); 
}
