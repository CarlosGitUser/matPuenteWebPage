import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstreeComponent } from './cardstree.component';

describe('CardstreeComponent', () => {
  let component: CardstreeComponent;
  let fixture: ComponentFixture<CardstreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardstreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardstreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
