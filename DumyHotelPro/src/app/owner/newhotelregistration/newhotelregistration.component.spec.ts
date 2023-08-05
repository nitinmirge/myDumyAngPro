import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhotelregistrationComponent } from './newhotelregistration.component';

describe('NewhotelregistrationComponent', () => {
  let component: NewhotelregistrationComponent;
  let fixture: ComponentFixture<NewhotelregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewhotelregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewhotelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
