import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyofficeComponent } from './onlyoffice.component';

describe('OnlyofficeComponent', () => {
  let component: OnlyofficeComponent;
  let fixture: ComponentFixture<OnlyofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
