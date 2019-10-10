import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../_services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  post: any;
  loading: boolean = true;
  subscription: Subscription;

  constructor(private ps: PostsService, private route: ActivatedRoute, private afs: AngularFirestore, private location: Location) { }

  ngOnInit() {    
    this.subscription = this.ps.selectedPost$.subscribe(post => {
      if (post !== null) this.loading = false;
      this.post=post;
    });

    // when there is no selected post, eg: first time loading using a deep link
    if (this.ps.selectedPost$.getValue() === null) {
      const postId = this.route.snapshot.paramMap.get('postid');
      this.afs.collection('posts').doc(postId).valueChanges().pipe(
        first(),
        tap(post => this.ps.selectedPost$.next(post))
      ).subscribe();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCloseButtonClicked() {
    this.location.back();
  }
}
