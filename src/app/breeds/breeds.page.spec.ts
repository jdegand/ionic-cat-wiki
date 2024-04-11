import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BreedsPage } from './breeds.page';
import { provideRouter } from '@angular/router';

describe('BreedsPage', () => {
  let component: BreedsPage;
  let fixture: ComponentFixture<BreedsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BreedsPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BreedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize breeds and results arrays', () => {
    expect(component.breeds.length).toBeGreaterThan(0);
    expect(component.results.length).toBeGreaterThan(0);
  });

  it('should filter results based on input query', () => {
    const query = 'Abyssinian';
    component.handleInput({ target: { value: query } });
    expect(component.results.length).toBe(1);
    expect(component.results[0]).toBe(query);
  });

});
