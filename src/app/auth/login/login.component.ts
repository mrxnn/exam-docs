import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  selectedTab = 'signin'; // could be signup

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
}
