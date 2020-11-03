import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuveJerseyComponent } from './juve-jersey.component';

describe('JuveJerseyComponent', () => {
  let component: JuveJerseyComponent;
  let fixture: ComponentFixture<JuveJerseyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuveJerseyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuveJerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
