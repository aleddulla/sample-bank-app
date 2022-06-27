import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  account: Account = {
    title: '',
    wamount: 0,
  };
  submitted = false;
  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }

  deposit() {
    const data = {
      accountType: 'Savings',
      amount: this.account.wamount
    };

    this.accountService.deposit(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['bankDetails']);
        },
        error => {
          console.log(error);
        });
  }

}
