import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class Globals {
  blog: Observable<any[]>;
  courses: Observable<any[]>;
  education: Observable<any[]>;
  know_how: Observable<any[]>;
  prizes: Observable<any[]>;
  profile: Observable<any[]>;
  technical_skills: Observable<any[]>;

  loaded = false;

  constructor(private db: AngularFirestore) { }

  load() {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
    this.blog = this.db.collection('blog').valueChanges();
    this.courses = this.db.collection('courses').valueChanges();
    this.education = this.db.collection('education').valueChanges();
    this.know_how = this.db.collection('know_how').valueChanges();
    this.prizes = this.db.collection('prizes').valueChanges();
    this.profile = this.db.collection('profile').valueChanges();
    this.technical_skills = this.db.collection('/technical_skills').valueChanges();
  }
}
