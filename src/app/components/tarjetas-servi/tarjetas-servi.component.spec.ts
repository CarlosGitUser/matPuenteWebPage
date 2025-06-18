import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasServiComponent } from './tarjetas-servi.component';

describe('TarjetasServiComponent', () => {
  let component: TarjetasServiComponent;
  let fixture: ComponentFixture<TarjetasServiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasServiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasServiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
