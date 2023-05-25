import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardGeneralComponent } from './product-card-general.component';

describe('ProductCardGeneralComponent', () => {
  let component: ProductCardGeneralComponent;
  let fixture: ComponentFixture<ProductCardGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
