import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  posts: Observable<any[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.posts = this.afs.collection('posts').valueChanges({ idField: 'id' });
  }
}
