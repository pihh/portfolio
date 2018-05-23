import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBlogComponent } from './block-blog.component';

describe('BlockBlogComponent', () => {
  let component: BlockBlogComponent;
  let fixture: ComponentFixture<BlockBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
