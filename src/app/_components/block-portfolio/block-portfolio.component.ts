import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';
import { DatabaseService } from '../../_services/database.service';

@Component({
  selector: 'app-block-portfolio',
  templateUrl: './block-portfolio.component.html',
  styleUrls: ['./block-portfolio.component.scss']
})
export class BlockPortfolioComponent implements OnInit {

  block = 'portfolio';

  contentBlocksSubscription: any;
  showBlockAboutSubscription: any;
  closeMenuSubscription: any;
  portfolioSubscription: any = [];
  profileSubscription: any;

  contentBlocksClass = 'hidex';
  blockClass = '';

  profile = {};

  constructor(private pubSubService: PubSubService , private db: DatabaseService) {
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
    this.showBlockAboutSubscription = this.pubSubService.on('showPortfolioContact').subscribe(() => this.openBlock());
    this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(() => this.showBlock('none'));
    this.portfolioSubscription = this.db.portfolio;

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
    this.portfolioSubscription.unsubscribe();
    this.profileSubscription.unsubscribe();
  }

  showBlock(block) {
    this.contentBlocksClass = 'hidex';
    this.blockClass = '';
    if (block == this.block) {
      this.pubSubService.publish('showPortfolioContact');
    }
  }

  openBlock(){
    this.contentBlocksClass = '';
    this.blockClass = 'showx';
  }

}
