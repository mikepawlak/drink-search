import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilterOptionsService {
  ROOT_URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php";

  constructor(private http: HttpClient) { }

  public getFilter(filter): Observable<any> {
    return this.http.get(`${this.ROOT_URL}?${filter}=list`);
  }
}
