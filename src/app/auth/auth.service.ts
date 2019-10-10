import { Injectable, Optional } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.collection('users').doc(user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async signOut(@Optional() redirectURL: string) {
    await this.afAuth.auth.signOut();
    if (redirectURL) {
      this.router.navigate([redirectURL]);
    }
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credentials = await this.afAuth.auth.signInWithPopup(provider);
    this.updateUserData(credentials.user);
  }

  updateUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.collection('users').doc(user.uid);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: ['subscriber']
    }
    return userRef.set(data, {merge:true});
  }

  private checkAuthorization(user: User, allowedRoles: string[]) : boolean {
    if (!user) return false;
    for (const role of allowedRoles) {
      if (user.roles.includes(role)) 
        return true;
    }
    return false;
  }

  isAdmin(user: User) {
    return this.checkAuthorization(user, ['admin']);
  }
}
