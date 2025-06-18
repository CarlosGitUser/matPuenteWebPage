import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarProductosComponent } from './filtrar-productos.component';

describe('FiltrarProductosComponent', () => {
  let component: FiltrarProductosComponent;
  let fixture: ComponentFixture<FiltrarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrarProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
