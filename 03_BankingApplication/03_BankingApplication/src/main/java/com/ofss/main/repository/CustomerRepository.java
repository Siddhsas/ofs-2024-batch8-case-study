package com.ofss.main.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
	
	public Customer findByUserName(String userName);

//	public List<Account> findByCustomer(Customer customer);
	
}
