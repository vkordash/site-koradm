import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAnonsComponent } from './last-anons.component';

describe('LastAnonsComponent', () => {
  let component: LastAnonsComponent;
  let fixture: ComponentFixture<LastAnonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastAnonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastAnonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
