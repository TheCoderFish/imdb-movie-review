import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueryStringService {

  /**
   * queryString Subject is private to encapsulate and hide its next method
   */
  private queryString: Subject<string>;

  /**
   * Observable of the subject to give listeners the input query via its function getQueryString
   */
  private queryString$: Observable<string>;

  constructor() {
    this.queryString = new Subject<string>();
    this.queryString$ = this.queryString.asObservable();
  }

  public set query(query: string) {
    this.queryString.next(query);
  }

  public getQueryString() {
    return this.queryString$.pipe(
      filter((query: string) => query.length > 3),
      distinctUntilChanged(),
      debounceTime(400),
      map((query: string) => query.toLowerCase().trim())
    );
  }
}
