import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenefitsPage } from './benefits.page';

describe('BenefitsPage', () => {
  let component: BenefitsPage;
  let fixture: ComponentFixture<BenefitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
