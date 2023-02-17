import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireUpComponent } from './wire-up.component';

describe('WireUpComponent', () => {
  let component: WireUpComponent;
  let fixture: ComponentFixture<WireUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WireUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WireUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
