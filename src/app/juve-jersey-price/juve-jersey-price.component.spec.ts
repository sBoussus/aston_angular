import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuveJerseyPriceComponent } from './juve-jersey-price.component';

describe('JuveJerseyPriceComponent', () => {
  let component: JuveJerseyPriceComponent;
  let fixture: ComponentFixture<JuveJerseyPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuveJerseyPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuveJerseyPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
