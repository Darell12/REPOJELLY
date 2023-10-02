import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { UserResponse } from '@app/interfaces/user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}


  getUsers(): Observable<any> {
    const url = `${environment.jellyUrl}/Users`;
    // const headers = this.getHeaders();
    const params = new HttpParams().set('api_key', environment.api_key);
    return this.http.get(url, { params });
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${environment.jellyUrl}/Users/${userId}`;
    const params = new HttpParams().set('api_key', environment.api_key);
    console.log(url);
    return this.http.delete(url, { params });
  }

  newUser(name: string, password: string | null) {
    const url = `${environment.jellyUrl}/Users/New`;
    const params = new HttpParams().set('api_key', environment.api_key);

    const body = {
      Name: name,
      Password: password,
    };
    return this.http.post<UserResponse>(url, body, { params });
  }
}
