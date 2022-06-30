import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeClearListComponent } from './bike-clear-list.component';

describe('BikeClearListComponent', () => {
  let component: BikeClearListComponent;
  let fixture: ComponentFixture<BikeClearListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeClearListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeClearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
