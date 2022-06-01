import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  URL_API = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=693a765e58883fcaac1107950290e59d&hash=6e0b63572f8ccbc461f4313cb309ae41';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }

}
