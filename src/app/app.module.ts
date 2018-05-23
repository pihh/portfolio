// ORIGINAL
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// PACKAGES
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// MODULES
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { BlogComponent } from './_pages/blog/blog.component';
import { PreloaderComponent } from './_components/preloader/preloader.component';
import { InlineMenuComponent } from './_components/inline-menu/inline-menu.component';
import { BlockMenuComponent } from './_components/block-menu/block-menu.component';
import { BlockAboutComponent } from './_components/block-about/block-about.component';
import { BlockPortfolioComponent } from './_components/block-portfolio/block-portfolio.component';
import { BlockBlogComponent } from './_components/block-blog/block-blog.component';
import { BlockContactComponent } from './_components/block-contact/block-contact.component';

// SERVICES


// PIPES


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PreloaderComponent,
    InlineMenuComponent,
    BlockMenuComponent,
    BlockAboutComponent,
    BlockPortfolioComponent,
    BlockBlogComponent,
    BlockContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
