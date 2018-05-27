import { Component, OnInit , OnDestroy } from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';
import { DatabaseService } from '../../_services/database.service';

@Component({
  selector: 'app-block-about',
  templateUrl: './block-about.component.html',
  styleUrls: ['./block-about.component.scss']
})
export class BlockAboutComponent implements OnInit, OnDestroy {
  block: string = 'about';

  contentBlocksSubscription: any;
  showBlockAboutSubscription: any;
  closeMenuSubscription: any;
  profileSubscription: any;

  skillSubscription: any = [];
  knowSubscription: any = [];
  educationSubscription: any = [{createTime:0}];
  experienceSubscription: any = [];
  courseSubscription: any = [];
  prizeSubscription: any = [];

  contentBlocksClass = 'hidex';
  blockClass = '';

  profile = {
    name: '',
    about: '',
    address: '',
    birth_date: '',
    email: '',
    interests: '',
    phone: '',
    skype: ''
  };


  constructor(private pubSubService: PubSubService, private db: DatabaseService) {
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
    this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe((block) => this.showBlock(block));
    this.showBlockAboutSubscription = this.pubSubService.on('showBlockAbout').subscribe(() => this.openBlock());
    this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(() => this.showBlock('none'));

    this.skillSubscription = this.db.technical_skills;
    this.knowSubscription = this.db.know_how;
    this.educationSubscription = this.db.education;
    this.experienceSubscription = this.db.experience;
    this.courseSubscription = this.db.courses;
    this.prizeSubscription = this.db.prizes;

    this.profileSubscription = this.db.profile.subscribe(data => {
      if (data && Array.isArray(data) && data[0]) {
        this.profile = data[0];
      }
    });
  }

  ngOnDestroy() {
    this.contentBlocksSubscription.unsubscribe();
    this.showBlockAboutSubscription.unsubscribe();
    this.closeMenuSubscription.unsubscribe();
    this.profileSubscription.unsubscribe();
  }

  showBlock(block) {
    this.contentBlocksClass = 'hidex';
    this.blockClass = '';
    if (block == this.block) {
      this.pubSubService.publish('showBlockAbout');
    }
  }



  openBlock(){
    this.contentBlocksClass = '';
    this.blockClass = 'showx';
  }
}
