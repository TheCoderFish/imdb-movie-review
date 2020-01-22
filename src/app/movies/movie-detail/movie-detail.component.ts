import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieReviewComponent } from '../movie-review/movie-review.component';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  @Input() public set movie(movie: Movie) {
    if (movie) {
      this._movie = movie;
    }
  };

  public get movie():Movie{
    return this._movie;
  }

  private _movie: Movie;

  constructor(private modalService: NgbModal) { }

  public openReviewModal() {
    //Configuration for modal, can be moved to a class/service and apply with useClass/useValue
    const config = {
      backdrop: true,
      windowClass: 'custom-class',
      backdropClass: 'backdrop'
    }
    const modalRef: NgbModalRef = this.modalService.open(MovieReviewComponent, config);
    const reviewInstance: MovieReviewComponent = modalRef.componentInstance;

    //Setting movie property of the movie-review component
    reviewInstance.movie = this.movie;
  }

}
