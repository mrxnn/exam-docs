import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/shared/posts/posts.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  posts$: Observable<any[]>;

  constructor(private router: Router, public ps: PostsService) { }

  ngOnInit() {
  }

  onPostClicked(post: any) {
    this.ps.selectedPost$.next(post);
    this.router.navigate(['posts', post.id]);
  }

  load() {
    this.posts$ = this.ps.loadAllPosts();
  }
}
