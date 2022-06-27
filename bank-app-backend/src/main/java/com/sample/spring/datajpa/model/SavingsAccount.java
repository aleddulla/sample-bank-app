package com.sample.spring.datajpa.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "savings_account")
public class SavingsAccount {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "accountType")
	private String accountType;

	@Column(name = "amount", columnDefinition = "DECIMAL(7,2)")
	private BigDecimal accountBalance;

	@Column(name = "published")
	private boolean published;

	public SavingsAccount() {

	}

	public SavingsAccount(String accountType, BigDecimal accountBalance, boolean published) {
		this.accountType = accountType;
		this.accountBalance = accountBalance;
		this.published = published;
	}

	public long getId() {
		return id;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public BigDecimal getAccountBalance() {
		return accountBalance;
	}

	public void setAccountBalance(BigDecimal accountBalance) {
		this.accountBalance = accountBalance;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean isPublished) {
		this.published = isPublished;
	}

	@Override
	public String toString() {
		return "Tutorial [id=" + id + ", accountType=" + accountType + ", accountBalance=" + accountBalance + ", published=" + published + "]";
	}

}
