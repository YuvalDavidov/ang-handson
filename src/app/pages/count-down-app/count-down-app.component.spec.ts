import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownAppComponent } from './count-down-app.component';

describe('CountDownAppComponent', () => {
  let component: CountDownAppComponent;
  let fixture: ComponentFixture<CountDownAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDownAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
