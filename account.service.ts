import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseurl = 'http://localhost:8080/accounts';

  constructor(private httpClient: HttpClient) { }

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.baseurl}`);
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(`${this.baseurl}`, account);
  }

  getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.baseurl}/${id}`);
  }

  deposit(id: number, amount: number): Observable<Account> {
    const request = { amount };
    return this.httpClient.put<Account>(`${this.baseurl}/${id}/deposit`, request);
  }

  withdraw(id: number, amount: number): Observable<Account> {
    const request = { amount };
    return this.httpClient.put<Account>(`${this.baseurl}/${id}/withdraw`, request);
  }

  delete(id:number):Observable<Account>{
    
    return this.httpClient.delete<Account>(`${this.baseurl}/${id}`)
  }
}