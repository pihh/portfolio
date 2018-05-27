import { Component, OnInit , OnDestroy, ViewChild } from '@angular/core';
import { PubSubService } from '../../_services/pub-sub.service';
import { DatabaseService } from '../../_services/database.service';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-block-contact',
  templateUrl: './block-contact.component.html',
  styleUrls: ['./block-contact.component.scss']
})
export class BlockContactComponent implements OnInit, OnDestroy {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  block: string = 'contact';
  name = '';
  email = '';
  body = '';

  contentBlocksSubscription: any;
  showBlockAboutSubscription: any;
  closeMenuSubscription: any;
  profileSubscription: any = [];

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
    this.showBlockAboutSubscription = this.pubSubService.on('showBlockContact').subscribe(() => this.openBlock());
    this.closeMenuSubscription = this.pubSubService.on('closeMenu').subscribe(() => this.showBlock('none'));
    this.profileSubscription = this.db.profile.subscribe(data => {
      if (data && Array.isArray(data) && data[0]) {
        this.profile = data[0];
        this.email = this.profile.email;
      }
    });
    const mapProp = {
      center: new google.maps.LatLng(38.7436883, -9.1952225),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
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
      this.pubSubService.publish('showBlockContact');
    }
  }

  openBlock(){
    this.contentBlocksClass = '';
    this.blockClass = 'showx';
  }
}
