import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QueryStringService } from '../services/query-string.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * searchQuery
   * FornControl to accept input query to search movie names
   */
  public searchQuery: FormControl;

  constructor(private queryStringService: QueryStringService) {
  }

  ngOnInit() {
    this.searchQuery = new FormControl('');

    /**
     * Set the query string of the Subject when input value changes so that its listeners recieve and react
     * Using queryStringService for cross component communication
     */
    this.searchQuery.valueChanges.subscribe((queryString: string) => {
      this.queryStringService.query = queryString;
    });
  }

}
