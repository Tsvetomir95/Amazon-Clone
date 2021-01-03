import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMenuContentComponent } from './slide-menu-content.component';

describe('SlideMenuContentComponent', () => {
  let component: SlideMenuContentComponent;
  let fixture: ComponentFixture<SlideMenuContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMenuContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
