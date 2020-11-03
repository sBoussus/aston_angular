import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuveJerseyFlockingComponent } from './juve-jersey-flocking.component';

describe('JuveJerseyFlockingComponent', () => {
  let component: JuveJerseyFlockingComponent;
  let fixture: ComponentFixture<JuveJerseyFlockingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuveJerseyFlockingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuveJerseyFlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
