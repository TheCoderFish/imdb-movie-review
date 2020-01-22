import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public storeReview(review: any) {
    localStorage.setItem(`review-${review.id}`, JSON.stringify(review));
  }

  public fetchReview(reviewId: string): any {
    localStorage.getItem(JSON.parse(localStorage.getItem(reviewId)));
  }
}
