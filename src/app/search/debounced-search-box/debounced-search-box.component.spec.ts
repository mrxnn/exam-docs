import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncedSearchBoxComponent } from './debounced-search-box.component';

describe('DebouncedSearchBoxComponent', () => {
  let component: DebouncedSearchBoxComponent;
  let fixture: ComponentFixture<DebouncedSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouncedSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncedSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
