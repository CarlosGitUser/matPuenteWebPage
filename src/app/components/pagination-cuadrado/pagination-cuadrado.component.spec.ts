import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCuadradoComponent } from './pagination-cuadrado.component';

describe('PaginationCuadradoComponent', () => {
  let component: PaginationCuadradoComponent;
  let fixture: ComponentFixture<PaginationCuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationCuadradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationCuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
