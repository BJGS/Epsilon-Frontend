import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TablefunModel } from './tablefun.model';

@Injectable({
  providedIn: 'root',
})
export class TablefunService {
  constructor(private http: HttpClient) {}

  getTabledata() {
    return this.http.get<TablefunModel>(
      'https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json'
    );
  }
}
