import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsfiveComponent } from './cardsfive.component';

describe('CardsfiveComponent', () => {
  let component: CardsfiveComponent;
  let fixture: ComponentFixture<CardsfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsfiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
