import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  algoliaConfig = {
    apiKey: environment.algolia.apiKey,
    appId: environment.algolia.appId,
    indexName: 'posts',
    routing: false
  }

  constructor(private location: Location) { }

  onCloseButtonClicked() {
    this.location.back();
  }
}
