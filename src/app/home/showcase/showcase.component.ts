import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/_services/posts/posts.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  posts: Observable<any[]>;

  constructor(private afs: AngularFirestore, private router: Router, private ps: PostsService) { }

  ngOnInit() {
    this.posts = this.afs.collection('posts').valueChanges({ idField: 'id' });
  }

  onPostClicked(post: any) {
    this.ps.selectedPost$.next(post);
    this.router.navigate(['post', post.id]);
  }
}
