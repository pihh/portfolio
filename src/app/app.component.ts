import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  coursesObservable: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
  }

  getCourses(listPath: string): Observable<any[]> {
    return this.db.collection(listPath).valueChanges();
  }
}
