import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private envService: EnvService) { }

  getAccountBalance(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.envService.baseURL}/api/tutorials`);
  }

  deposit(data: any): Observable<any> {
    return this.http.post(`${this.envService.baseURL}/api/deposit`, data);
  }

  withdraw(data: any): Observable<any> {
    return this.http.put(`${this.envService.baseURL}/api/withdraw`, data);
  }

}
