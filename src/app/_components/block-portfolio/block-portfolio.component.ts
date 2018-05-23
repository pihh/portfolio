import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';

@Component({
  selector: 'app-block-portfolio',
  templateUrl: './block-portfolio.component.html',
  styleUrls: ['./block-portfolio.component.scss']
})
export class BlockPortfolioComponent implements OnInit {

  block: string = 'portfolio';

  contentBlocksSubscription: any;
  showBlockAboutSubscription: any;
  closeMenuSubscription: any;

  contentBlocksClass = 'hidex';
  blockClass = '';


  constructor(private pubSubService: PubSubService) { }

  ngOnInit() {
    this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe((block) => this.showBlock(block));
    this.showBlockAboutSubscription = this.pubSubService.on('showPortfolioContact').subscribe(() => this.openBlock());
    this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(() => this.showBlock('none'));
  }

  ngOnDestroy() {
    this.contentBlocksSubscription.unsubscribe();
    this.showBlockAboutSubscription.unsubscribe();
    this.closeMenuSubscription.unsubscribe();
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
