import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdudentComponent } from './stdudent.component';

describe('StdudentComponent', () => {
  let component: StdudentComponent;
  let fixture: ComponentFixture<StdudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
