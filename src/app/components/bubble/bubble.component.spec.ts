import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BubbleComponent } from './bubble.component';

describe('BubbleComponent', () => {
  let component: BubbleComponent;
  let fixture: ComponentFixture<BubbleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BubbleComponent]
    }).compileComponents(); // compileComponents returns a promise that is why you need async

    fixture = TestBed.createComponent(BubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
