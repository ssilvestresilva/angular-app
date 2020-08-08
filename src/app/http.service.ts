import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
