import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPortfolioComponent } from './block-portfolio.component';

describe('BlockPortfolioComponent', () => {
  let component: BlockPortfolioComponent;
  let fixture: ComponentFixture<BlockPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
