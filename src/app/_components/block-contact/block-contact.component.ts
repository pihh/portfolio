import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';

@Component({
  selector: 'app-block-contact',
  templateUrl: './block-contact.component.html',
  styleUrls: ['./block-contact.component.scss']
})
export class BlockContactComponent implements OnInit, OnDestroy {

  block: string = 'contact';

  contentBlocksSubscription: any;
  showBlockAboutSubscription: any;
  closeMenuSubscription: any;

  contentBlocksClass = 'hidex';
  blockClass = '';


  constructor(private pubSubService: PubSubService) { }

  ngOnInit() {
    this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe((block) => this.showBlock(block));
    this.showBlockAboutSubscription = this.pubSubService.on('showBlockContact').subscribe(() => this.openBlock());
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
      this.pubSubService.publish('showBlockContact');
    }
  }

  openBlock(){
    this.contentBlocksClass = '';
    this.blockClass = 'showx';
  }
}
