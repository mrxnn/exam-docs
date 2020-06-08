import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenMax, Expo } from 'gsap/TweenMax';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @ViewChild('loading') loading: ElementRef;
  @ViewChild('loadingbackground') loadingBackground: ElementRef;
  @ViewChild('loadingsmallbackground') loadingSmallBackground: ElementRef;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.doc('not/exists').valueChanges().pipe(
      first(),
      delay(1000), // 1s is the duration of the initial animation
      tap(() => this.animate()))
      .subscribe();
  }
  
  private animate() {
    TweenMax.to(this.loadingBackground.nativeElement, 1, {
      width: 200,
      ease: Expo.easeOut
    });

    TweenMax.to(this.loadingSmallBackground.nativeElement, 1.5, {
      width: 40,
      ease: Expo.easeOut
    });

    TweenMax.to(this.loading.nativeElement, 2, {
      delay: 1,
      top: "-100%",
      ease: Expo.easeInOut
    });
  }
}
