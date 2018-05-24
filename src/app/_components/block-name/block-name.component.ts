import { Component, OnInit , OnDestroy } from '@angular/core';

import { DatabaseService } from '../../_services/database.service';

import CONSTANTS from '../../../constants';

@Component({
  selector: 'app-block-name',
  templateUrl: './block-name.component.html',
  styleUrls: ['./block-name.component.scss']
})
export class BlockNameComponent implements OnInit , OnDestroy {

  facebook = CONSTANTS.SOCIAL.FACEBOOK;
  linkedin = CONSTANTS.SOCIAL.LINKEDIN;

  profile = {};
  profileSubscription: any;

  constructor(private db: DatabaseService) {
    this.profile = {
      name: '',
      about: '',
      address: '',
      birth_date: '',
      email: '',
      interests: '',
      phone: '',
      skype: ''
    };
  }

  ngOnInit() {
    this.profileSubscription = this.db.profile.subscribe(data => {
      if (data && Array.isArray(data) && data[0]) {
        this.profile = data[0];

      }
    });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
