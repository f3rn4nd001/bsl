import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVijeComponent } from './detalle-vije.component';

describe('DetalleVijeComponent', () => {
  let component: DetalleVijeComponent;
  let fixture: ComponentFixture<DetalleVijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVijeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
