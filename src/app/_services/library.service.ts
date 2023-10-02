import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '@app/interfaces/user-response.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor(private http: HttpClient) {}

  getLibraries() {
    const url = `${environment.jellyUrl}/Library/VirtualFolders`;
    const params = new HttpParams().set('api_key', environment.api_key);
    return this.http.get(url, { params });
  }

  getCoverImage(ItemId: string) {
    const url = `${environment.jellyUrl}/Items/${ItemId}/Primary`;
    const params = new HttpParams().set('api_key', environment.api_key);
    return this.http.get(url, { params });
  }
}
