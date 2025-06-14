import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environments';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceTs {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {
  }

  addTransaction(type: 'income' | 'expense', transaction: any): Observable<any> {}
}
