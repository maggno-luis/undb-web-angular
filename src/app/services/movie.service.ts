import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3';
  
  private headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTk5MzRjY2JkZDdjZTRhNTFiNDM3NzhkMjRkNmY3NyIsIm5iZiI6MTcyNDQyOTA3MS40NDIwMTIsInN1YiI6IjY2YzhhZjEzODUzNDU2MGVlYWQ4MGZjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R7-iFBmrzqQqz6oMRBdI5in_HSTEopVhfSJn5EmJLNM'
  });
  
  constructor(private http: HttpClient) { }

  getMovies(page: number): Observable<any> {

    const params = new HttpParams()
      .set('language', 'pt-BR')
      .set('page', page.toString())
      .set('sort_by', 'popularity.desc');

    return this.http.get<any>(`${this.apiUrl}/discover/movie`,  { headers: this.headers, params });
  }

  getMovieDetails(movieId: string): Observable<any> {

    const params = {
      language: 'pt-BR'
    };

    return this.http.get(`${this.apiUrl}/movie/${movieId}`, {headers: this.headers, params})
  }

  getMovieByName(name: string){
    const params = {
      query: name,
      language: 'pt-BR',
      page: '1'
    };

    return this.http.get<any>(`${this.apiUrl}/search/movie`,  { headers: this.headers, params }).pipe(
      tap(response => console.log('Resposta', response))
    );

  }

}
