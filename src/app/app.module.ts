import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { DebouncedSearchBoxComponent } from './search/debounced-search-box/debounced-search-box.component';
import { AuthModule } from './auth/auth.module';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { LoadingComponent } from './loading/loading.component';
import { LazyLoadDirective } from './shared/lazy-load/lazy-load.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    ShowcaseComponent,
    NewsletterComponent,
    FooterComponent,
    SearchComponent,
    DebouncedSearchBoxComponent,
    ProfileComponent,
    PostComponent,
    LoadingComponent,
    LazyLoadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgAisModule.forRoot(),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
