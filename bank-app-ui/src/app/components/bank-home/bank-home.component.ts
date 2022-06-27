import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-bank-home',
  templateUrl: './bank-home.component.html',
  styleUrls: ['./bank-home.component.css']
})
export class BankHomeComponent implements OnInit {
  totalAmount?: any;
  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  deposit() {
    this.router.navigate(['deposit']);
  }

  withdraw() {
    this.router.navigate(['withdraw']);
  }

  retrieveTutorials(): void {
    this.accountService.getAccountBalance()
      .subscribe(
        data => {
          this.totalAmount = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
