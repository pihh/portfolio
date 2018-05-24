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

  contentBlocksClass = 'hidex';
  blockClass = '';


  constructor(private pubSubService: PubSubService , private db: DatabaseService) { }

  ngOnInit() {
    this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe((block) => this.showBlock(block));
    this.showBlockAboutSubscription = this.pubSubService.on('showPortfolioContact').subscribe(() => this.openBlock());
    this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(() => this.showBlock('none'));
    this.portfolioSubscription = this.db.portfolio;
  }

  ngOnDestroy() {
    this.contentBlocksSubscription.unsubscribe();
    this.showBlockAboutSubscription.unsubscribe();
    this.closeMenuSubscription.unsubscribe();
    this.portfolioSubscription.unsubscribe();
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
