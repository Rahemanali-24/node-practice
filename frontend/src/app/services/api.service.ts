import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }

  createUser(userData:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/users`,userData);
  }

  getHighScores(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/highScores`);
  }
}
