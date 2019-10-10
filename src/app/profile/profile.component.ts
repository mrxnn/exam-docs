import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(public auth: AuthService, private location: Location) { }
  onCloseButtonClicked() {
    this.location.back();
  }
}
