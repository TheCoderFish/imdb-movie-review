import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() public set movie(movie:Movie){
    if(movie){
      this._movie = movie;
    }
  };

  public get movie():Movie{
    return this._movie;
  }

  private _movie:Movie;

  constructor() { }

  ngOnInit() {
  }

}
