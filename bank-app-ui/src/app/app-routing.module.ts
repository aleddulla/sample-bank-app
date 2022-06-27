import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { BankHomeComponent } from './components/bank-home/bank-home.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: LoginComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bankDetails', component: BankHomeComponent , canActivate: [AuthGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
