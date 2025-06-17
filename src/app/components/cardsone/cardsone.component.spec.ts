import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsoneComponent } from './cardsone.component';

describe('CardsoneComponent', () => {
  let component: CardsoneComponent;
  let fixture: ComponentFixture<CardsoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
