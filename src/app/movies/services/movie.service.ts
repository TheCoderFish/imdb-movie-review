import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, pluck, reduce, take, tap } from 'rxjs/operators';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey:string = '45b4879a';

  constructor(private http: HttpClient) { }

  /**
   * getMovieList
   * @param query input query from header
   * RxJS stream manipulations
   * Open the console.log to see what is recieved from the api
   */
  getMovieList(query: string) {
    return this.http.get<any[]>(`http://www.omdbapi.com/?s=${query}&apikey=${this.apiKey}`).pipe(
      tap(console.log),
      filter((response: any) => response.Response === 'True'),
      pluck('Search'),
      mergeMap((asIs: any[]) => asIs),
      take(5),
      mergeMap((movie: any) => {
        return this.getMovieById(movie.imdbID)
      }),
      map((movie: any) => {
        const { imdbRating, imdbID, Title, Year, Rated, Runtime, Genre, Director, Writer, Actors, Plot } = movie;
        return new Movie(imdbRating, Title, Year, Rated, Runtime, Genre, Director, Writer, Actors, Plot, imdbID)
      }),
      reduce((acc: Movie[], movie) => [...acc, movie], []),
    );;
  }

  /**
   * getMovieById
   * @param id imdb movie id
   * Gets movie by id, used by movie list internally
   */
  getMovieById(id: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=${this.apiKey}`);
  }
}
