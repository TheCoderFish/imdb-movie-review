import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Movie } from '../movie.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.scss']
})
export class MovieReviewComponent implements OnInit {

  @Input() public set movie(movie: Movie) {
    if (movie) {
      this._movie = movie;
    }
  }

  public get movie(): Movie {
    return this._movie
  }

  private _movie: Movie;

  public review = new FormControl('');


  constructor(public storageService:StorageService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public submitReview() {
    this.storageService.storeReview({
      id:this.movie.imdbID,
      title:this.movie.Title,
      review:this.review.value
    });
    this.activeModal.dismiss();
    //id,review,name
  }

}
