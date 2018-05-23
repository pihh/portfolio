import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNameComponent } from './block-name.component';

describe('BlockNameComponent', () => {
  let component: BlockNameComponent;
  let fixture: ComponentFixture<BlockNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
