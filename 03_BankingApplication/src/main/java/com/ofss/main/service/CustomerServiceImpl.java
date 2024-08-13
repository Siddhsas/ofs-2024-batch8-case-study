package com.ofss.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ofss.main.domain.Customer;
import com.ofss.main.repository.CustomerRepository;

@Component
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerrepository;

	@Override
	public Iterable<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return customerrepository.findAll();
	}

	@Override
	public Customer addNewCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerrepository.save(customer);
	}

	@Override
	public Customer loginCustomer(Customer customer) {
		Customer customer1 = new Customer();
		customer1= customerrepository.findByUserName(customer.getUserName());
		if (customer1!=null) {
			if(customer1.getStatus().equalsIgnoreCase("Blocked")) {
				return customer1;
			}
			else {
			if(customer1.getPassword().equals(customer.getPassword())) {
				customer1.setNo_of_attempts(0);
				customer1=customerrepository.save(customer1);
				return customer1;
			}
			else {
				if(customer1.getNo_of_attempts()>=3) {
					customer1.setStatus("Blocked");
					customer1=customerrepository.save(customer1);
					return customer1;
				}
				customer1.setNo_of_attempts(customer1.getNo_of_attempts()+1);
				customer1=customerrepository.save(customer1);
				return customer1;
			}
			}
		}
		else {
			Customer customer2=new Customer();
			customer2.setUserName("Invalid");
			return customer2;
					
		}
		
	}

	

}
