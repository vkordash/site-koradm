import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastVideosComponent } from './last-videos.component';

describe('LastVideosComponent', () => {
  let component: LastVideosComponent;
  let fixture: ComponentFixture<LastVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
