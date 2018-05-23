import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  coursesObservable: Observable<any[]>;

  constructor(private db: AngularFirestore , public globals: Globals) {
    this.coursesObservable = this.getCourses('courses');
    this.globals.load();
  }

  ngOnInit() {

  }

  getCourses(collection: string): Observable<any[]> {
    return this.db.collection(collection).valueChanges();
  }
}
