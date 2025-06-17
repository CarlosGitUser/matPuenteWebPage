import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpectwoComponent } from './section-spectwo.component';

describe('SectionSpectwoComponent', () => {
  let component: SectionSpectwoComponent;
  let fixture: ComponentFixture<SectionSpectwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSpectwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSpectwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
