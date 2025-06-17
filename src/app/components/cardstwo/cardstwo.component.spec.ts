import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstwoComponent } from './cardstwo.component';

describe('CardstwoComponent', () => {
  let component: CardstwoComponent;
  let fixture: ComponentFixture<CardstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardstwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
