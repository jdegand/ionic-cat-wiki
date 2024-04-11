import { HttpClient } from "@angular/common/http";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BreedPage } from "./breed.page";

describe('BreedPage', () => {
  let component: BreedPage;
  let fixture: ComponentFixture<BreedPage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BreedPage]
    });

    fixture = TestBed.createComponent(BreedPage);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should make an HTTP request in ngOnInit', () => {
    const DATA = {
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
    };

    component.ngOnInit();

    const req = httpTestingController.expectOne('https://api.thecatapi.com/v1/breeds/search?q=srex');
    expect(req.request.method).toEqual('GET');

    req.flush(DATA);

    expect(component.breed).toEqual([DATA]);
  });
});
