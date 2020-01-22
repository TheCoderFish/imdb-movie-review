import { Component, OnInit } from '@angular/core';
import { QueryStringService } from 'src/app/services/query-string.service';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { pluck, mergeMap, tap, reduce, catchError, map, filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public moviesList: Observable<any>;

  constructor(private movieService: MovieService,
              private queryStringService: QueryStringService) { }

  ngOnInit() {
    this.moviesList = this.movieService.getMovieList(`batman`);

    this.queryStringService.getQueryString().subscribe((query: string) => {
      this.moviesList = this.movieService.getMovieList(query);
    });
  }

}
