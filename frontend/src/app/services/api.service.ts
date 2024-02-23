import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }

  createUser(userData:UserData): Observable<UserData>{
    return this.http.post<UserData>(`${this.baseUrl}/users`,userData);
  }

  getHighScores(): Observable<UserData> {
    return this.http.get<UserData>(`${this.baseUrl}/highScores`);
  }
}
