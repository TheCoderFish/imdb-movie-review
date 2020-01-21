import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryStringService {
  private queryString: Subject<string>;
  private queryString$: Observable<string>;

  constructor() {
    this.queryString = new Subject<string>();
    this.queryString$ = this.queryString.asObservable();
   }

   public set query(query:string){
     this.queryString.next(query);
   }

   public getQueryString(){
    return this.queryString$;
  }
}
