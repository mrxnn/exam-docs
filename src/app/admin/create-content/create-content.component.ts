import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  tinymceInit;
  apiKey = environment.tinyMCE.apiKey;

  constructor() {
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
}
