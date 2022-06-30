import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeClearFormComponent } from './bike-clear-form.component';

describe('BikeClearFormComponent', () => {
  let component: BikeClearFormComponent;
  let fixture: ComponentFixture<BikeClearFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeClearFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeClearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
