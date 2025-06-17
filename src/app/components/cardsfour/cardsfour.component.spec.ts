import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsfourComponent } from './cardsfour.component';

describe('CardsfourComponent', () => {
  let component: CardsfourComponent;
  let fixture: ComponentFixture<CardsfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsfourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
