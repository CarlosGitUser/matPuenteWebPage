import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpecOffeComponent } from './section-spec-offe.component';

describe('SectionSpecOffeComponent', () => {
  let component: SectionSpecOffeComponent;
  let fixture: ComponentFixture<SectionSpecOffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSpecOffeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSpecOffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
