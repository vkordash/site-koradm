import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDocsComponent } from './last-docs.component';

describe('LastDocsComponent', () => {
  let component: LastDocsComponent;
  let fixture: ComponentFixture<LastDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
