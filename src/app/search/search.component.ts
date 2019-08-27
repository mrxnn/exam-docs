import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private location: Location) { }

  onCloseButtonClicked() {
    this.location.back();
  }
}
