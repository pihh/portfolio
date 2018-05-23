import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
