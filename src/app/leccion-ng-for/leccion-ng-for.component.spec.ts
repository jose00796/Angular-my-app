import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionNgForComponent } from './leccion-ng-for.component';

describe('LeccionNgForComponent', () => {
  let component: LeccionNgForComponent;
  let fixture: ComponentFixture<LeccionNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeccionNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeccionNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
