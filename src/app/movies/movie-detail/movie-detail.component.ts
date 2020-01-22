import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieReviewComponent } from '../movie-review/movie-review.component';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() public set movie(movie: Movie) {
    if (movie) {
      this._movie = movie;
    }
  };

  public get movie(): Movie {
    return this._movie;
  }

  private _movie: Movie;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = true;
    config.centered = true;
    config.size = 'xl';
  }

  ngOnInit() {
  }

  openReviewModal() {
    const modalRef: NgbModalRef = this.modalService.open(MovieReviewComponent);
    const reviewInstance: MovieReviewComponent = modalRef.componentInstance;
    reviewInstance.movie = this.movie;
  }

}
