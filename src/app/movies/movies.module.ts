import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModalModule, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';


@NgModule({
  declarations: [MoviesListComponent, MovieDetailComponent, MovieReviewComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule
  ],
  providers:[
    NgbModalConfig
  ],
  entryComponents:[
    MovieReviewComponent
  ]
})
export class MoviesModule { }
