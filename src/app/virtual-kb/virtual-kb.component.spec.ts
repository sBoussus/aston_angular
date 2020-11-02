import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualKbComponent } from './virtual-kb.component';

describe('VirtualKbComponent', () => {
  let component: VirtualKbComponent;
  let fixture: ComponentFixture<VirtualKbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualKbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualKbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
