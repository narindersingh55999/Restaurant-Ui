import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksBeveragesComponent } from './drinks-beverages.component';

describe('DrinksBeveragesComponent', () => {
  let component: DrinksBeveragesComponent;
  let fixture: ComponentFixture<DrinksBeveragesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrinksBeveragesComponent]
    });
    fixture = TestBed.createComponent(DrinksBeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
