import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleadminComponent } from './toggleadmin.component';

describe('ToggleadminComponent', () => {
  let component: ToggleadminComponent;
  let fixture: ComponentFixture<ToggleadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
