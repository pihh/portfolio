import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockContactComponent } from './block-contact.component';

describe('BlockContactComponent', () => {
  let component: BlockContactComponent;
  let fixture: ComponentFixture<BlockContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
