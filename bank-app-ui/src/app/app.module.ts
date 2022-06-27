import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './core/register/register.component';
import { appInterceptors } from './core/interceptors/app.interceptor';
import { BankHomeComponent } from './components/bank-home/bank-home.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BankHomeComponent,
    DepositComponent,
    WithdrawComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [appInterceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }
