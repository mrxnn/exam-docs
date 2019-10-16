import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  selectedPost$ = new BehaviorSubject<any>(null);

  constructor(private afs: AngularFirestore) { }

  loadPost(id: string) {
    return this.afs.collection('posts').doc(id).valueChanges().pipe(shareReplay());
  }

  loadAllPosts() {
    return this.afs.collection('posts').valueChanges({ idField: 'id' }).pipe(shareReplay());
  }
}
