import { Component, OnInit , ElementRef, AfterViewInit } from '@angular/core';
import { fadeOutAnimation } from '../../_animations/fade-out.animation';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  animations: [
    fadeOutAnimation
  ]
})
export class PreloaderComponent implements OnInit {

  leftClass: any = false;
  rightClass: any = false;
  loaded: boolean = false;

  constructor(private myElement: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    if (!this.loaded) {
      const appRootRef = this.myElement // Necesarry because after setTimeout, 'this' becomes window

      this.loaded = true;
      setTimeout(function() {
        appRootRef.nativeElement.remove()
      }, 2400);

    }
  }
}
