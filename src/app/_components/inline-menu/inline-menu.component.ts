import { Component, OnInit , OnDestroy} from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';

@Component({
  selector: 'app-inline-menu',
  templateUrl: './inline-menu.component.html',
  styleUrls: ['./inline-menu.component.scss']
})

export class InlineMenuComponent implements OnInit, OnDestroy {

  menuClass = 'hidex';
  about = '';
  portfolio = '';
  blog = '';
  contact = '';

  hideAllAndShowOneSubscription: any;
  closeMenuSubscription: any;

  constructor(private pubSubService: PubSubService) { }

  ngOnInit() {
    this.hideAllAndShowOneSubscription = this.pubSubService.on('hideAllAndShowOne').subscribe((menu) => this.updateMenu(menu));
    this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(() => this.closeMenu());
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
    this.pubSubService.publish('closeMenu');
  }

  closeMenu() {
    this.menuClass = 'hidex';
  }

  updateMenu(menu) {
    this.about = '';
    this.portfolio = '';
    this.blog = '';
    this.contact = '';

    this[menu] = 'active';
    this.menuClass = 'showx';
  }
}
