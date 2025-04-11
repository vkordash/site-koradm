import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMediaComponent } from './main-media.component';

describe('MainMediaComponent', () => {
  let component: MainMediaComponent;
  let fixture: ComponentFixture<MainMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
