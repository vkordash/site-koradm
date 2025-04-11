import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPhotosComponent } from './last-photos.component';

describe('LastPhotosComponent', () => {
  let component: LastPhotosComponent;
  let fixture: ComponentFixture<LastPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
