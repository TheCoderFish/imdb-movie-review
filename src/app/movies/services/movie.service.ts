import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck, mergeMap, map, reduce, tap, filter, take } from 'rxjs/operators';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieList(query: string) {
    return this.http.get(`http://www.omdbapi.com/?s=${query}&apikey=45b4879a`).pipe(
     filter((response:any) => response.Response === 'True'),
      pluck('Search'),
      mergeMap((asIs: any[]) => asIs),
      take(5),
      mergeMap((movie: any) => {
        return this.getMovieById(movie.imdbID)
      }),
      map((movie: any) => {
        const { imdbRating, Title, Year, Rated, Runtime, Genre, Director, Actors, Plot } = movie;
        return new Movie(imdbRating, Title, Year, Rated, Runtime, Genre, Director, Actors, Plot)
      }),
      reduce((acc: Movie[], movie) => [...acc, movie], []),
    );;
  }

  getMovieById(id: string) {
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=45b4879a`);
  }
}
