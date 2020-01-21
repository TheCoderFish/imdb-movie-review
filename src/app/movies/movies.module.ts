import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';


@NgModule({
  declarations: [MoviesListComponent, MovieDetailComponent, MovieReviewComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  entryComponents:[
    MovieReviewComponent
  ]
})
export class MoviesModule { }
