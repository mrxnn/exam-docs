import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  tinymceInit;
  apiKey = environment.tinyMCE.apiKey;

  constructor(private location: Location, private auth: AuthService) {
    this.tinymceInit = {
      plugins : [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen emoticons paste",
        "insertdatetime media nonbreaking save table directionality template textpattern"
      ],
      toolbar : 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat'
    }
  }

  ngOnInit() {
  }

  onCloseButtonClicked() {
    this.location.back();
  }

  onLogoutButtonClicked() {
    this.auth.signOut('/');
  }
}
