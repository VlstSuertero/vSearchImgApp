import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkListItemComponent } from './bookmark-list-item.component';

describe('BookmarkListItemComponent', () => {
  let component: BookmarkListItemComponent;
  let fixture: ComponentFixture<BookmarkListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
