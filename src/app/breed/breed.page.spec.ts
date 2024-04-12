import { HttpClient } from "@angular/common/http";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BreedPage } from "./breed.page";
import { ApiHttpClientService } from "../services/api-http-client.service";
import { of } from "rxjs";

describe('BreedPage', () => {
  let component: BreedPage;
  let fixture: ComponentFixture<BreedPage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let apiHttpClientService: ApiHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BreedPage]
    });

    fixture = TestBed.createComponent(BreedPage);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    apiHttpClientService = TestBed.inject(ApiHttpClientService);
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

  it('should fetch breed data and images correctly', () => {
    const breedData = [
      {
        "weight": {
          "imperial": "7 - 11",
          "metric": "3 - 5"
        },
        "id": "kora",
        "name": "Korat",
        "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Korat.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/korat",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/korat",
        "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
        "origin": "Thailand",
        "country_codes": "TH",
        "country_code": "TH",
        "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
        "life_span": "10 - 15",
        "indoor": 0,
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 3,
        "grooming": 1,
        "health_issues": 1,
        "intelligence": 5,
        "shedding_level": 3,
        "social_needs": 5,
        "stranger_friendly": 2,
        "vocalisation": 3,
        "experimental": 0,
        "hairless": 0,
        "natural": 0,
        "rare": 1,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Korat",
        "hypoallergenic": 0,
        "reference_image_id": "DbwiefiaY",
        "image": {
          "id": "DbwiefiaY",
          "width": 1200,
          "height": 627,
          "url": "https://cdn2.thecatapi.com/images/DbwiefiaY.png"
        }
      }
    ];
    const heroImage = {
      "id": "DbwiefiaY",
      "url": "https://cdn2.thecatapi.com/images/DbwiefiaY.png",
      "breeds": [
        {
          "weight": {
            "imperial": "7 - 11",
            "metric": "3 - 5"
          },
          "id": "kora",
          "name": "Korat",
          "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Korat.aspx",
          "vetstreet_url": "http://www.vetstreet.com/cats/korat",
          "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/korat",
          "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
          "origin": "Thailand",
          "country_codes": "TH",
          "country_code": "TH",
          "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
          "life_span": "10 - 15",
          "indoor": 0,
          "adaptability": 5,
          "affection_level": 5,
          "child_friendly": 4,
          "dog_friendly": 5,
          "energy_level": 3,
          "grooming": 1,
          "health_issues": 1,
          "intelligence": 5,
          "shedding_level": 3,
          "social_needs": 5,
          "stranger_friendly": 2,
          "vocalisation": 3,
          "experimental": 0,
          "hairless": 0,
          "natural": 0,
          "rare": 1,
          "rex": 0,
          "suppressed_tail": 0,
          "short_legs": 0,
          "wikipedia_url": "https://en.wikipedia.org/wiki/Korat",
          "hypoallergenic": 0,
          "reference_image_id": "DbwiefiaY"
        }
      ],
      "width": 1200,
      "height": 627
    }
    const otherImages = [
      {
        "breeds": [
          {
            "weight": {
              "imperial": "7 - 11",
              "metric": "3 - 5"
            },
            "id": "kora",
            "name": "Korat",
            "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Korat.aspx",
            "vetstreet_url": "http://www.vetstreet.com/cats/korat",
            "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/korat",
            "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
            "origin": "Thailand",
            "country_codes": "TH",
            "country_code": "TH",
            "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
            "life_span": "10 - 15",
            "indoor": 0,
            "adaptability": 5,
            "affection_level": 5,
            "child_friendly": 4,
            "dog_friendly": 5,
            "energy_level": 3,
            "grooming": 1,
            "health_issues": 1,
            "intelligence": 5,
            "shedding_level": 3,
            "social_needs": 5,
            "stranger_friendly": 2,
            "vocalisation": 3,
            "experimental": 0,
            "hairless": 0,
            "natural": 0,
            "rare": 1,
            "rex": 0,
            "suppressed_tail": 0,
            "short_legs": 0,
            "wikipedia_url": "https://en.wikipedia.org/wiki/Korat",
            "hypoallergenic": 0,
            "reference_image_id": "DbwiefiaY"
          }
        ],
        "id": "1TcC-kiI1",
        "url": "https://cdn2.thecatapi.com/images/1TcC-kiI1.jpg",
        "width": 1080,
        "height": 1350
      },
      {
        "breeds": [
          {
            "weight": {
              "imperial": "7 - 11",
              "metric": "3 - 5"
            },
            "id": "kora",
            "name": "Korat",
            "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Korat.aspx",
            "vetstreet_url": "http://www.vetstreet.com/cats/korat",
            "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/korat",
            "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
            "origin": "Thailand",
            "country_codes": "TH",
            "country_code": "TH",
            "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
            "life_span": "10 - 15",
            "indoor": 0,
            "adaptability": 5,
            "affection_level": 5,
            "child_friendly": 4,
            "dog_friendly": 5,
            "energy_level": 3,
            "grooming": 1,
            "health_issues": 1,
            "intelligence": 5,
            "shedding_level": 3,
            "social_needs": 5,
            "stranger_friendly": 2,
            "vocalisation": 3,
            "experimental": 0,
            "hairless": 0,
            "natural": 0,
            "rare": 1,
            "rex": 0,
            "suppressed_tail": 0,
            "short_legs": 0,
            "wikipedia_url": "https://en.wikipedia.org/wiki/Korat",
            "hypoallergenic": 0,
            "reference_image_id": "DbwiefiaY"
          }
        ],
        "id": "CWGNkdpA7",
        "url": "https://cdn2.thecatapi.com/images/CWGNkdpA7.jpg",
        "width": 654,
        "height": 549
      },
      {
        "breeds": [
          {
            "weight": {
              "imperial": "7 - 11",
              "metric": "3 - 5"
            },
            "id": "kora",
            "name": "Korat",
            "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Korat.aspx",
            "vetstreet_url": "http://www.vetstreet.com/cats/korat",
            "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/korat",
            "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
            "origin": "Thailand",
            "country_codes": "TH",
            "country_code": "TH",
            "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
            "life_span": "10 - 15",
            "indoor": 0,
            "adaptability": 5,
            "affection_level": 5,
            "child_friendly": 4,
            "dog_friendly": 5,
            "energy_level": 3,
            "grooming": 1,
            "health_issues": 1,
            "intelligence": 5,
            "shedding_level": 3,
            "social_needs": 5,
            "stranger_friendly": 2,
            "vocalisation": 3,
            "experimental": 0,
            "hairless": 0,
            "natural": 0,
            "rare": 1,
            "rex": 0,
            "suppressed_tail": 0,
            "short_legs": 0,
            "wikipedia_url": "https://en.wikipedia.org/wiki/Korat",
            "hypoallergenic": 0,
            "reference_image_id": "DbwiefiaY"
          }
        ],
        "id": "xPuWATvp9",
        "url": "https://cdn2.thecatapi.com/images/xPuWATvp9.jpg",
        "width": 1080,
        "height": 1350
      },
      {
        "breeds": [
          {
            "weight": {
              "imperial": "7 - 11",
              "metric": "3 - 5"
            },
            "id": "kora",
            "name": "Korat",
            "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Korat.aspx",
            "vetstreet_url": "http://www.vetstreet.com/cats/korat",
            "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/korat",
            "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
            "origin": "Thailand",
            "country_codes": "TH",
            "country_code": "TH",
            "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
            "life_span": "10 - 15",
            "indoor": 0,
            "adaptability": 5,
            "affection_level": 5,
            "child_friendly": 4,
            "dog_friendly": 5,
            "energy_level": 3,
            "grooming": 1,
            "health_issues": 1,
            "intelligence": 5,
            "shedding_level": 3,
            "social_needs": 5,
            "stranger_friendly": 2,
            "vocalisation": 3,
            "experimental": 0,
            "hairless": 0,
            "natural": 0,
            "rare": 1,
            "rex": 0,
            "suppressed_tail": 0,
            "short_legs": 0,
            "wikipedia_url": "https://en.wikipedia.org/wiki/Korat",
            "hypoallergenic": 0,
            "reference_image_id": "DbwiefiaY"
          }
        ],
        "id": "BbsNPAeop",
        "url": "https://cdn2.thecatapi.com/images/BbsNPAeop.jpg",
        "width": 645,
        "height": 380
      },
      {
        "breeds": [
          {
            "weight": {
              "imperial": "7 - 11",
              "metric": "3 - 5"
            },
            "id": "kora",
            "name": "Korat",
            "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Korat.aspx",
            "vetstreet_url": "http://www.vetstreet.com/cats/korat",
            "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/korat",
            "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
            "origin": "Thailand",
            "country_codes": "TH",
            "country_code": "TH",
            "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
            "life_span": "10 - 15",
            "indoor": 0,
            "adaptability": 5,
            "affection_level": 5,
            "child_friendly": 4,
            "dog_friendly": 5,
            "energy_level": 3,
            "grooming": 1,
            "health_issues": 1,
            "intelligence": 5,
            "shedding_level": 3,
            "social_needs": 5,
            "stranger_friendly": 2,
            "vocalisation": 3,
            "experimental": 0,
            "hairless": 0,
            "natural": 0,
            "rare": 1,
            "rex": 0,
            "suppressed_tail": 0,
            "short_legs": 0,
            "wikipedia_url": "https://en.wikipedia.org/wiki/Korat",
            "hypoallergenic": 0,
            "reference_image_id": "DbwiefiaY"
          }
        ],
        "id": "OfIuuOv07",
        "url": "https://cdn2.thecatapi.com/images/OfIuuOv07.jpg",
        "width": 1200,
        "height": 650
      },
      {
        "breeds": [
          {
            "weight": {
              "imperial": "7 - 11",
              "metric": "3 - 5"
            },
            "id": "kora",
            "name": "Korat",
            "cfa_url": "http://cfa.org/Breeds/BreedsKthruR/Korat.aspx",
            "vetstreet_url": "http://www.vetstreet.com/cats/korat",
            "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/korat",
            "temperament": "Active, Loyal, highly intelligent, Expressive, Trainable",
            "origin": "Thailand",
            "country_codes": "TH",
            "country_code": "TH",
            "description": "The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.",
            "life_span": "10 - 15",
            "indoor": 0,
            "adaptability": 5,
            "affection_level": 5,
            "child_friendly": 4,
            "dog_friendly": 5,
            "energy_level": 3,
            "grooming": 1,
            "health_issues": 1,
            "intelligence": 5,
            "shedding_level": 3,
            "social_needs": 5,
            "stranger_friendly": 2,
            "vocalisation": 3,
            "experimental": 0,
            "hairless": 0,
            "natural": 0,
            "rare": 1,
            "rex": 0,
            "suppressed_tail": 0,
            "short_legs": 0,
            "wikipedia_url": "https://en.wikipedia.org/wiki/Korat",
            "hypoallergenic": 0,
            "reference_image_id": "DbwiefiaY"
          }
        ],
        "id": "DbwiefiaY",
        "url": "https://cdn2.thecatapi.com/images/DbwiefiaY.png",
        "width": 1200,
        "height": 627
      }
    ];

    spyOn(apiHttpClientService, 'getBreedBySearchTerm').and.returnValue(of(breedData));
    spyOn(apiHttpClientService, 'getHeroImage').and.returnValue(of(heroImage));
    spyOn(apiHttpClientService, 'getOtherImageUrls').and.returnValue(of(otherImages));

    component.name = 'korat';
    component.ngOnInit();

    expect(component.data).toEqual({ hero: heroImage, images: otherImages });
    expect(component.loading).toBeFalse();
    // expect(component.filteredImages).toEqual(otherImages);
    // has error => 'number' index signatures are incompatible.
  });

  it('should handle errors correctly', () => {
    const error = new Error('An error occurred');

    spyOn(apiHttpClientService, 'getBreedBySearchTerm').and.returnValue(of([]));

    // problem here: method only expects an Image -> using of({}) doesn't work
    spyOn(apiHttpClientService, 'getHeroImage').and.returnValue(of());
    spyOn(apiHttpClientService, 'getOtherImageUrls').and.returnValue(of());

    component.name = 'invalid search term';
    component.ngOnInit();

    expect(component.loading).toBeFalse();
    expect(component.error).toEqual(error);
  });

});
