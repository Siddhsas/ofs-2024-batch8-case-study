package com.ofss.main.domain;

public class Admin {
    private String fistName;
    private String lastName;
    private String userName;
    private String password;
    public String getFistName() {
        return fistName;
    }
    public void setFistName(String fistName) {
        this.fistName = fistName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Admin(String fistName, String lastName, String userName, String password) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
    }
    
}
