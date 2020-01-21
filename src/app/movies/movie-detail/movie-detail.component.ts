import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() public set movie(movie:any){
    if(movie){
      this._movie = movie;
    }
  };

  public get movie(){
    return this._movie;
  }

  private _movie:any;

  constructor() { }

  ngOnInit() {
  }

}
