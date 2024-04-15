import { HttpClient } from "@angular/common/http";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, } from "@angular/core/testing";
import { HomePage } from "./home.page";
import { provideRouter } from "@angular/router";
import { FormsModule } from "@angular/forms";
//import { ApiHttpClientService } from "../services/api-http-client.service";

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  //let router: Router;
  //let apiHttpClientService: ApiHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HomePage, FormsModule],
      providers: [provideRouter([])] 
    });

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    //router = TestBed.inject(Router);
    httpTestingController = TestBed.inject(HttpTestingController);
    //apiHttpClientService = TestBed.inject(ApiHttpClientService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should make an HTTP request in ngOnInit', () => {
    const DATA = [
      {
        "weight": {
          "imperial": "6 - 12",
          "metric": "3 - 7"
        },
        "id": "beng",
        "name": "Bengal",
        "cfa_url": "http://cfa.org/Breeds/BreedsAB/Bengal.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/bengal",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/bengal",
        "temperament": "Alert, Agile, Energetic, Demanding, Intelligent",
        "origin": "United States",
        "country_codes": "US",
        "country_code": "US",
        "description": "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
        "life_span": "12 - 15",
        "indoor": 0,
        "lap": 0,
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "cat_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 5,
        "grooming": 1,
        "health_issues": 3,
        "intelligence": 5,
        "shedding_level": 3,
        "social_needs": 5,
        "stranger_friendly": 3,
        "vocalisation": 5,
        "bidability": 3,
        "experimental": 0,
        "hairless": 0,
        "natural": 0,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_(cat)",
        "hypoallergenic": 1,
        "reference_image_id": "O3btzLlsO",
        "image": {
          "id": "O3btzLlsO",
          "width": 1100,
          "height": 739,
          "url": "https://cdn2.thecatapi.com/images/O3btzLlsO.png"
        }
      },
      {
        "weight": {
          "imperial": "8 - 16",
          "metric": "4 - 7"
        },
        "id": "norw",
        "name": "Norwegian Forest Cat",
        "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/NorwegianForestCat.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/norwegian-forest-cat",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/norwegian-forest-cat",
        "temperament": "Sweet, Active, Intelligent, Social, Playful, Lively, Curious",
        "origin": "Norway",
        "country_codes": "NO",
        "country_code": "NO",
        "description": "The Norwegian Forest Cat is a sweet, loving cat. She appreciates praise and loves to interact with her parent. She makes a loving companion and bonds with her parents once she accepts them for her own. She is still a hunter at heart. She loves to chase toys as if they are real. She is territorial and patrols several times each day to make certain that all is fine.",
        "life_span": "12 - 16",
        "indoor": 0,
        "alt_names": "Skogkatt / Skaukatt, Norsk Skogkatt / Norsk Skaukatt, Weegie",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 3,
        "grooming": 2,
        "health_issues": 3,
        "intelligence": 4,
        "shedding_level": 3,
        "social_needs": 5,
        "stranger_friendly": 5,
        "vocalisation": 1,
        "experimental": 0,
        "hairless": 0,
        "natural": 1,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Norwegian_Forest_Cat",
        "hypoallergenic": 0,
        "reference_image_id": "06dgGmEOV",
        "image": {
          "id": "06dgGmEOV",
          "width": 1200,
          "height": 1021,
          "url": "https://cdn2.thecatapi.com/images/06dgGmEOV.jpg"
        }
      },
      {
        "weight": {
          "imperial": "8 - 25",
          "metric": "4 - 11"
        },
        "id": "sava",
        "name": "Savannah",
        "vetstreet_url": "http://www.vetstreet.com/cats/savannah",
        "temperament": "Curious, Social, Intelligent, Loyal, Outgoing, Adventurous, Affectionate",
        "origin": "United States",
        "country_codes": "US",
        "country_code": "US",
        "description": "Savannah is the feline version of a dog. Actively seeking social interaction, they are given to pouting if left out. Remaining kitten-like through life. Profoundly loyal to immediate family members whilst questioning the presence of strangers. Making excellent companions that are loyal, intelligent and eager to be involved.",
        "life_span": "17 - 20",
        "indoor": 0,
        "alt_names": "",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 5,
        "grooming": 1,
        "health_issues": 1,
        "intelligence": 5,
        "shedding_level": 3,
        "social_needs": 5,
        "stranger_friendly": 5,
        "vocalisation": 1,
        "experimental": 1,
        "hairless": 0,
        "natural": 0,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Savannah_cat",
        "hypoallergenic": 0,
        "reference_image_id": "a8nIYvs6S",
        "image": {
          "id": "a8nIYvs6S",
          "width": 850,
          "height": 1100,
          "url": "https://cdn2.thecatapi.com/images/a8nIYvs6S.jpg"
        }
      },
      {
        "weight": {
          "imperial": "6 - 16",
          "metric": "3 - 7"
        },
        "id": "srex",
        "name": "Selkirk Rex",
        "cfa_url": "http://cfa.org/Breeds/BreedsSthruT/SelkirkRex.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/selkirk-rex",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/selkirk-rex",
        "temperament": "Active, Affectionate, Dependent, Gentle, Patient, Playful, Quiet, Social",
        "origin": "United States",
        "country_codes": "US",
        "country_code": "US",
        "description": "The Selkirk Rex is an incredibly patient, loving, and tolerant breed. The Selkirk also has a silly side and is sometimes described as clownish. She loves being a lap cat and will be happy to chat with you in a quiet voice if you talk to her. ",
        "life_span": "14 - 15",
        "indoor": 0,
        "lap": 1,
        "alt_names": "Shepherd Cat",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 3,
        "grooming": 2,
        "health_issues": 4,
        "intelligence": 3,
        "shedding_level": 1,
        "social_needs": 3,
        "stranger_friendly": 3,
        "vocalisation": 3,
        "experimental": 0,
        "hairless": 0,
        "natural": 0,
        "rare": 0,
        "rex": 1,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Selkirk_Rex",
        "hypoallergenic": 1,
        "reference_image_id": "II9dOZmrw",
        "image": {
          "id": "II9dOZmrw",
          "width": 1920,
          "height": 902,
          "url": "https://cdn2.thecatapi.com/images/II9dOZmrw.jpg"
        }
      }
    ]

    //component.ngOnInit();
    fixture.detectChanges();

    const req = httpTestingController.expectOne('https://api.thecatapi.com/v1/breeds');
    expect(req.request.method).toEqual('GET');

    req.flush(DATA);

    expect(component.featuredBreeds).toEqual(DATA);
  });

  /*
  it('should have no data after HTTP GET request fails', waitForAsync(() => {
    spyOn(console, 'error');

    //apiHttpClientService.fetchBreeds().subscribe(() => {
    //  expect(component.breeds).toEqual([]);
    //  expect(component.featuredBreeds).toEqual([]);
    //});

    apiHttpClientService.fetchBreeds().subscribe({
      next: () => fail('Failed'),
      error: (error: HttpErrorResponse) => {
        expect(error.message).toBe("Http failure response for https://api.thecatapi.com/v1/breeds: 500 Internal server error' to be 'Error occurred during the request'.'");
        expect(console.error).toHaveBeenCalled();
      }
    });

    const request = httpTestingController.expectOne(
      'https://api.thecatapi.com/v1/breeds'
    );

    // request.error(new ErrorEvent('Failed'))

    const errorResponse = new ErrorEvent('Failed to fetch data', {
      message: 'Error occurred during the request',
      error: new Error('Failed'),
    });

    request.flush('Failed',
      {
        status: 500,
        statusText: 'Internal server error'
      });
  }));
  */

  it('should dismiss modal on click', () => {
        spyOn(component, 'selectionChanged');

        const selectBreedButton = fixture.nativeElement.querySelector('#select-breed');
        selectBreedButton.click();
        fixture.detectChanges();

        const cancelButton = fixture.nativeElement.querySelector('.cancel-button');
        cancelButton.click();
        fixture.detectChanges();

        expect(component.selectionChanged).toHaveBeenCalled();
    });

});
