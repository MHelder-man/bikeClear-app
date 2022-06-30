import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeUserComponent } from './bike-user.component';

describe('BikeUserComponent', () => {
  let component: BikeUserComponent;
  let fixture: ComponentFixture<BikeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
