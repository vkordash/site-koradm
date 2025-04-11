import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtReceptionComponent } from './virt-reception.component';

describe('VirtReceptionComponent', () => {
  let component: VirtReceptionComponent;
  let fixture: ComponentFixture<VirtReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtReceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
