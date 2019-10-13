import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/_services/posts/posts.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  posts$: Observable<any[]>;

  constructor(private router: Router, private ps: PostsService) { }

  ngOnInit() {
    this.posts$ = this.ps.loadAllPosts();
  }

  onPostClicked(post: any) {
    this.ps.selectedPost$.next(post);
    this.router.navigate(['posts', post.id]);
  }
}
