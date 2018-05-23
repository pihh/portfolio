import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';

@Component({
  selector: 'app-block-blog',
  templateUrl: './block-blog.component.html',
  styleUrls: ['./block-blog.component.scss']
})
export class BlockBlogComponent implements OnInit {
  block: string = 'blog';

  contentBlocksSubscription: any;
  showBlockAboutSubscription: any;
  closeMenuSubscription: any;

  contentBlocksClass = 'hidex';
  blockClass = '';


  constructor(private pubSubService: PubSubService) { }

  ngOnInit() {
    this.contentBlocksSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe((block) => this.showBlock(block));
    this.showBlockAboutSubscription = this.pubSubService.on('showBlockBlog').subscribe(() => this.openBlock());
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
      this.pubSubService.publish('showBlockBlog');
    }
  }

  openBlock(){
    this.contentBlocksClass = '';
    this.blockClass = 'showx';
  }
}
