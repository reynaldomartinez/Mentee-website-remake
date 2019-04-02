import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramDescComponent } from './program-desc.component';

describe('ProgramDescComponent', () => {
  let component: ProgramDescComponent;
  let fixture: ComponentFixture<ProgramDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
