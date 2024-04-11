import { TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { BreedPage } from './breed.page';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
//import { IonicModule } from '@ionic/angular';

describe('BreedPage', () => {

  it('should verify that the breed name is displayed in header title', async () => {
    TestBed.configureTestingModule({
      imports: [BreedPage],
      providers: [
        provideRouter([{
          path: 'breed:name', component: BreedPage
        }])
      ]
    })

    const harness: RouterTestingHarness = await RouterTestingHarness.create('breed/ragdoll');
    const title = harness.fixture.debugElement.query(By.css('.title')).nativeElement;

    expect(title.textContent).toEqual("Ragdoll");
  });
});
