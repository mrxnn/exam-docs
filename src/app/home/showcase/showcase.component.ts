import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  posts: Observable<any[]>;

  constructor(private afs: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.posts = this.afs.collection('posts').valueChanges({ idField: 'id' });
  }

  onPostClicked(postId: string) {
    this.router.navigate(['post', postId]);
  }
}
