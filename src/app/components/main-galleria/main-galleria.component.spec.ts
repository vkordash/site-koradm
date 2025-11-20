import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGalleriaComponent } from './main-galleria.component';

describe('MainGalleriaComponent', () => {
  let component: MainGalleriaComponent;
  let fixture: ComponentFixture<MainGalleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGalleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
