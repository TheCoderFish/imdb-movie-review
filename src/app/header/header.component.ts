import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QueryStringService } from '../services/query-string.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchQuery: FormControl;


  constructor(private queryStringService: QueryStringService) {

  }

  ngOnInit() {
    this.searchQuery = new FormControl('');

    this.searchQuery.valueChanges.subscribe((queryString: string) => {
      this.queryStringService.query = queryString;
    });
  }

}
