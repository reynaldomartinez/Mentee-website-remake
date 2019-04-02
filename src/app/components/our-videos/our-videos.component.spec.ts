import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVideosComponent } from './our-videos.component';

describe('OurVideosComponent', () => {
  let component: OurVideosComponent;
  let fixture: ComponentFixture<OurVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
