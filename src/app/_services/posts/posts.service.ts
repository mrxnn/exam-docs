import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  selectedPost$ = new BehaviorSubject<any>(null);
  constructor() { }
}
