package com.sample.spring.datajpa.controller;

import java.math.BigDecimal;
import java.util.*;

import com.sample.spring.datajpa.model.SavingsAccount;
import com.sample.spring.datajpa.model.SavingsModel;
import com.sample.spring.datajpa.repository.TutorialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class SavingsController {

	@Autowired
	TutorialRepository tutorialRepository;

	@GetMapping("/tutorials")
	public String getAllTutorials(@RequestParam(required = false) String title) {
		Map<String,Object> map = new HashMap();
		String model = tutorialRepository.getAccountBalance();

		if(model!=null) {
			return model;
		} else {
			map.put("Msg","No Details Found !!");
		}
		return "No Details Found !!";
	}

	@PostMapping("/tutorials")
	public ResponseEntity<SavingsAccount> createTutorial(@RequestBody SavingsModel tutorial) {
		try {
			SavingsAccount _tutorial = null;
			if (tutorial.getAccountType().equalsIgnoreCase("Savings")) {
				String model = tutorialRepository.getAccountBalance();
				_tutorial = tutorialRepository
						.save(new SavingsAccount(tutorial.getAccountType(), new BigDecimal(model).add(new BigDecimal(tutorial.getAmount())), false));
			}

			return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/deposit")
	public ResponseEntity<SavingsAccount> deposit(@RequestBody SavingsModel tutorial) {
		try {
			SavingsAccount _tutorial = null;
			if (tutorial.getAccountType().equalsIgnoreCase("Savings")) {
				String model = tutorialRepository.getAccountBalance();
				_tutorial = tutorialRepository
						.save(new SavingsAccount(tutorial.getAccountType(), new BigDecimal(model).add(new BigDecimal(tutorial.getAmount())), false));
			}

			return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/withdraw")
	public ResponseEntity<SavingsAccount> withdraw(@RequestBody SavingsModel tutorial) {
		try {
			SavingsAccount _tutorial = null;
			if (tutorial.getAccountType().equalsIgnoreCase("Savings")) {
				String model = tutorialRepository.getAccountBalance();
				_tutorial = tutorialRepository
						.save(new SavingsAccount(tutorial.getAccountType(), new BigDecimal(model).add(new BigDecimal(tutorial.getAmount())), false));
			}

			return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
