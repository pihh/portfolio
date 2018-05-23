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
  constructor(private myElement: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const appRootRef = this.myElement // Necesarry because after setTimeout, 'this' becomes window
    setTimeout(function() {
      appRootRef.nativeElement.remove()
    }, 1000);
    if (!this.leftClass) {
      this.leftClass = 'slide-left';
      this.rightClass = 'slide-right';
    }
  }
}
