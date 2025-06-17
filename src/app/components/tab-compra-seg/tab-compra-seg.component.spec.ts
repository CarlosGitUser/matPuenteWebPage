import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCompraSegComponent } from './tab-compra-seg.component';

describe('TabCompraSegComponent', () => {
  let component: TabCompraSegComponent;
  let fixture: ComponentFixture<TabCompraSegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCompraSegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabCompraSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
