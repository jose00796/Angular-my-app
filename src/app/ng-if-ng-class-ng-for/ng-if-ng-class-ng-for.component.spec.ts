import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgClassNgForComponent } from './ng-if-ng-class-ng-for.component';

describe('NgIfNgClassNgForComponent', () => {
  let component: NgIfNgClassNgForComponent;
  let fixture: ComponentFixture<NgIfNgClassNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfNgClassNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfNgClassNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
