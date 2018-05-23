import { Component, OnInit, OnDestroy } from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';

@Component({
  selector: 'app-block-menu',
  templateUrl: './block-menu.component.html',
  styleUrls: ['./block-menu.component.scss']
})
export class BlockMenuComponent implements OnInit {

  about = '';
  portfolio = '';
  blog = '';
  contact = '';

  hideAllAndShowOneSubscription: any;
  closeMenuSubscription: any;

  constructor(private pubSubService: PubSubService) { }

  ngOnInit() {
    this.hideAllAndShowOneSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe((menu) => this.updateMenu(menu));
    this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(() => this.close());
  }

  ngOnDestroy() {
    this.hideAllAndShowOneSubscription.unsubscribe();
    this.closeMenuSubscription.unsubscribe();
  }

  hideAllAndShowOne(what: string) {
    this.pubSubService.publish('hideAllAndShowOne', what);
  }

  openResume() {
    this.hideAllAndShowOne('about');
  }
  openPortfolio() {
    this.hideAllAndShowOne('portfolio');
  }
  openBlog() {
    this.hideAllAndShowOne('blog');
  }
  openContact() {
    this.hideAllAndShowOne('contact');
  }


  close() {
    this.about = '';
    this.portfolio = '';
    this.blog = '';
    this.contact = '';
  }

  updateMenu(menu) {
    this.close();

    this[menu] = 'active';
  }
}
