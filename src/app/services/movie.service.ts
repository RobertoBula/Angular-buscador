

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movies';
import { Welcome } from '../interfaces/welcome';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL: string = 'https://www.omdbapi.com/?apikey=17fba62b';

  //key 17fba62b

  constructor(private http: HttpClient) {}
  getMovies(searchTerm: string): Observable <Movie[]> {
    return this.http.get<Welcome>(`${this.API_URL}&s=${searchTerm}`).pipe(
      map(response => {
        return response.Search
      })
    ); 
  }
}
