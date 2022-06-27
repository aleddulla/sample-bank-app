import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  account: Account = {
    title: '',
    wamount: 0,
  };
  submitted = false;
  constructor(private accountService: AccountService,
  private router: Router) { }

  ngOnInit(): void {
  }

  withdraw() {
    const data = {
      accountType: 'Savings',
      amount: this.account.wamount
    };

    this.accountService.withdraw(data)
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
