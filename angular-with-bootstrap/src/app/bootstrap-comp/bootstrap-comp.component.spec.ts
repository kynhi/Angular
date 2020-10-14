import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCompComponent } from './bootstrap-comp.component';

describe('BootstrapCompComponent', () => {
  let component: BootstrapCompComponent;
  let fixture: ComponentFixture<BootstrapCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
