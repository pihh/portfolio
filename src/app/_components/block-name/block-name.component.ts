import { Component, OnInit } from '@angular/core';

import { Globals } from '../../globals';

import CONSTANTS from '../../../constants';

@Component({
  selector: 'app-block-name',
  templateUrl: './block-name.component.html',
  styleUrls: ['./block-name.component.scss']
})
export class BlockNameComponent implements OnInit {

  name = 'Filipe Sá';
  profession = 'Level 2 senior fullstack developer';
  facebook = CONSTANTS.SOCIAL.FACEBOOK;
  linkedin = CONSTANTS.SOCIAL.LINKEDIN;

  profile:any;

  constructor(public globals: Globals) {
    this.globals.load();

  }

  ngOnInit() {
    this.profile = this.globals.profile[0];
    console.log(this.globals.profile);
  }

}
