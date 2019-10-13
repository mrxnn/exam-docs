import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  selectedPost$ = new BehaviorSubject<any>(null);
  loading: boolean;

  constructor(private afs: AngularFirestore) { }

  loadAllPosts() {
    this.loading = true;
    return this.afs.collection('posts').valueChanges({ idField: 'id' }).pipe(
      shareReplay(),
      tap(posts => this.loading = false)
    );
  }
}
