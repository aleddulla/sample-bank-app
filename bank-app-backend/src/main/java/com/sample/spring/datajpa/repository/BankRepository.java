package com.sample.spring.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.spring.datajpa.model.SavingsAccount;
import org.springframework.data.jpa.repository.Query;

public interface BankRepository extends JpaRepository<SavingsAccount, Long> {
	List<SavingsAccount> findByPublished(boolean published);
	List<SavingsAccount> findByAccountTypeContaining(String accountType);

	@Query(value = "SELECT  accountBalance FROM SavingsAccount where id = ( SELECT MAX(id) FROM SavingsAccount)")
	String getAccountBalance();
}
