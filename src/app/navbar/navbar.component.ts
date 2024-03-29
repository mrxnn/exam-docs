import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  loading: boolean;
  admin: boolean;
  subscription: Subscription;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.auth.user$.subscribe(user => {
      this.loading = false;
      if (this.auth.isAdmin(user)) 
        this.admin = true;
      else this.admin = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSignInClicked() {
    this.router.navigate(['login']);
  }

  onSignedInClicked() {
    // todo
    if (this.admin)
      this.router.navigate(['admin']);
    else 
      this.router.navigate(['profile']);
  }
}
