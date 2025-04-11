import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPhotosComponent } from './main-photos.component';

describe('MainPhotosComponent', () => {
  let component: MainPhotosComponent;
  let fixture: ComponentFixture<MainPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
