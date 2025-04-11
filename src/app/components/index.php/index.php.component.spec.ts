import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPhpComponent } from './index.php.component';

describe('IndexPhpComponent', () => {
  let component: IndexPhpComponent;
  let fixture: ComponentFixture<IndexPhpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPhpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
