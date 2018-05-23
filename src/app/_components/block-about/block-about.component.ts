import { Component, OnInit , OnDestroy } from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';

@Component({
  selector: 'app-block-about',
  templateUrl: './block-about.component.html',
  styleUrls: ['./block-about.component.scss']
})
export class BlockAboutComponent implements OnInit {
  block: string = 'about';

  contentBlocksSubscription: any;
  showBlockAboutSubscription: any;
  closeMenuSubscription: any;

  contentBlocksClass = 'hidex';
  blockClass = '';


  constructor(private pubSubService: PubSubService) { }

  ngOnInit() {
    this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe((block) => this.showBlock(block));
    this.showBlockAboutSubscription = this.pubSubService.on('showBlockAbout').subscribe(() => this.openBlock());
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
      this.pubSubService.publish('showBlockAbout');
    }
  }



  openBlock(){
    this.contentBlocksClass = '';
    this.blockClass = 'showx';
  }
}
