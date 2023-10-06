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

  getItemsLibrary(userId: string, parentId: string) {
    const url = `${environment.jellyUrl}/Users/${userId}/Items`;
    const params = new HttpParams()
      .set('api_key', environment.api_key)
      .set('ParentId', parentId);
    return this.http.get(url, { params });
  }

  postPlaySessionChange(
    itemId: string,
    startTimeTick: string
  ): Observable<any> {
    const url = `${environment.jellyUrl}/Items/${itemId}/PlaybackInfo?api_key=${environment.api_key}&StartTimeTicks=287268620`;
    const userId = 'e7dac62c400741428dfccfd6069955fc'
    const data = { userId };

    return this.http.post(url, data);
  }

  // Realiza una consulta HTTP DELETE
  deletePlaySessionChange(
    SessionId: string,
    deviceId: string
  ): Observable<any> {
    const url = `${environment.jellyUrl}/Videos/ActiveEncodings`;
    const params = new HttpParams()
      .set('api_key', environment.api_key)
      .set('deviceId', deviceId)
      .set('playSessionId', SessionId);

    return this.http.delete(url, { params });
  }

  
}
