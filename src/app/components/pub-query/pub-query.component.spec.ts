import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubQueryComponent } from './pub-query.component';

describe('PubQueryComponent', () => {
  let component: PubQueryComponent;
  let fixture: ComponentFixture<PubQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
