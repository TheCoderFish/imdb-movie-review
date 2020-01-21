import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private MOVIE_LIST = [
    {
      name: 'Avenger',
      year: 2019,
      descriptin: 'marvel'
    },
    {
      name: 'War',
      year: 2019,
      descriptin: 'bollywood'
    },
  ]
  constructor(private http:HttpClient) { }

  getMovies() {
    return of([...this.MOVIE_LIST]);
  }

  getInitialMovieList(){
    return this.http.get(`http://www.omdbapi.com/?s=love&apikey=45b4879a`);
  }
}
