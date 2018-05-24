import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  blog = [];
  courses = [];
  education = [];
  know_how = [];
  prizes = [];
  technical_skills = [];
  experience = [];
  portfolio = [];
  profile: any  = {};

  loaded = false;

  constructor(private db: AngularFirestore) {
    if (!this.loaded) {
      this.loaded = true;
      for ( const subscription of ['profile', 'blog', 'courses', 'education',
        'know_how', 'prizes', 'technical_skills', 'experience', 'portfolio']) {
        this[subscription] = this.db.collection(subscription).valueChanges();
      }

    }
  }

}
