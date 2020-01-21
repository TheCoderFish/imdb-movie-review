import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck, mergeMap, map, reduce, tap, filter, take } from 'rxjs/operators';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private MOVIE = {
    Title: " Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    irector: "Christopher Nolan",
    Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    imdbRating: "8.2",
    imdbID: "tt0372784"
  }

  constructor(private http: HttpClient) { }

  getMovieList(query: string) {
    return of([this.MOVIE]);
    return this.http.get(`http://www.omdbapi.com/?s=${query}&apikey=45b4879a`).pipe(
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

  getMovieById(id: string) {
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=45b4879a`);
  }
}
