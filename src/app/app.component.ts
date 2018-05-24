import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './_services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(private db: DatabaseService) {

  }

  ngOnInit() {

  }

}
