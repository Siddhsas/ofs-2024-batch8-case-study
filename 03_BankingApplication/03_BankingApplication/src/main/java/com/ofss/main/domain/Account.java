package com.ofss.main.domain;

import java.sql.Date;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Account")
public class Account {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int account_id=0;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customer_id")
	@JsonIgnore
    private Customer customer;
    private LocalDate opening_date=LocalDate.now();
    private double minimum_balance;
    private double current_balance=0;
    private String account_type;
    private double roi=0;

    
    
    public Account() {
	}
	public Account(int account_id, Customer customer, double current_balance, String account_type) {
        this.account_id = account_id;
        this.customer = customer;
        this.current_balance = current_balance;
        this.account_type = account_type;
    }
    public Account(int account_id, String account_type,double current_balance) {
        this.account_id = account_id;
        this.current_balance = current_balance;
        this.account_type = account_type;
    }
    public int getAccount_id() {
        return account_id;
    }
    public void setAccount_id(int account_id) {
        this.account_id = account_id;
    }
    public Customer getCustomer() {
        return customer;
    }
    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
    public LocalDate getOpening_date() {
        return opening_date;
    }
    public void setOpening_date(LocalDate opening_date) {
        this.opening_date = opening_date;
    }
    public double getMinimum_balance() {
        return minimum_balance;
    }
    public void setMinimum_balance(double minimum_balance) {
        this.minimum_balance = minimum_balance;
    }
    public double getCurrent_balance() {
        return current_balance;
    }
    public void setCurrent_balance(double current_balance) {
        this.current_balance = current_balance;
    }
    public String getAccount_type() {
        return account_type;
    }
    public void setAccount_type(String account_type) {
        this.account_type = account_type;
    }
    public double getRoi() {
        return roi;
    }
    public void setRoi(double roi) {
        this.roi = roi;
    }

    
}
