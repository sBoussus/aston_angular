import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuveJerseyVignettesComponent } from './juve-jersey-vignettes.component';

describe('JuveJerseyVignettesComponent', () => {
  let component: JuveJerseyVignettesComponent;
  let fixture: ComponentFixture<JuveJerseyVignettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuveJerseyVignettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuveJerseyVignettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
