import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAboutComponent } from './block-about.component';

describe('BlockAboutComponent', () => {
  let component: BlockAboutComponent;
  let fixture: ComponentFixture<BlockAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
