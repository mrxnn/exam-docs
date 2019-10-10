import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  constructor(public ps: PostsService, private route: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {
    if (this.ps.selectedPost$.getValue() === null) {
      console.log('No value since first time...');
      const postId = this.route.snapshot.paramMap.get('postid');
      this.afs.collection('posts').doc(postId).valueChanges().pipe(
        tap(post => this.ps.selectedPost$.next(post)),
        first()
      ).subscribe();
    }
  }
}
