package com.ofss.main.domain;

import java.sql.Date;

public class Cheque {
    private int cheque_no;
    private Date cheque_date;
    private Account account;
    private long cheque_amount;
    private String cheque_status;
}
