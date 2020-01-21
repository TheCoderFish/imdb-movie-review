import { Component, OnInit } from '@angular/core';
import { QueryStringService } from 'src/app/services/query-string.service';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public moviesList:Observable<any>;

  constructor(private movieService: MovieService,
    private queryStringService: QueryStringService) { }

  ngOnInit() {
    this.moviesList = this.movieService.getMovies();

    this.moviesList =this.movieService.getInitialMovieList().pipe(pluck('Search'));
  }

}
