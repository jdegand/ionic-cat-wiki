import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BreedPage } from "./breed.page";
import { ApiHttpClientService } from "../services/api-http-client.service";
import { of, throwError } from "rxjs";

describe('BreedPage', () => {
  let component: BreedPage;
  let fixture: ComponentFixture<BreedPage>;
  let httpTestingController: HttpTestingController;
  let apiHttpClientService: ApiHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BreedPage]
    });

    fixture = TestBed.createComponent(BreedPage);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    apiHttpClientService = TestBed.inject(ApiHttpClientService);
  });

  afterEach(() => {
    httpTestingController.verify();
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

    expect(component.breed).toEqual(breedData);
    expect(component.data).toEqual({ hero: heroImage, images: otherImages });
    expect(component.loading).toBeFalse();
    // expect(component.filteredImages).toEqual(otherImages);
    // has error => 'number' index signatures are incompatible.
  });

  it('should handle errors correctly', () => {
    const error = new Error('GetBreed Error');

    spyOn(apiHttpClientService, 'getBreedBySearchTerm').and.returnValue(throwError(() => new Error("GetBreed Error")));
    spyOn(apiHttpClientService, 'getHeroImage').and.returnValue(throwError(() => new Error("GetHero Error")));
    spyOn(apiHttpClientService, 'getOtherImageUrls').and.returnValue(throwError(() => new Error("OtherImages Error")));

    component.name = 'invalid search term';
    component.ngOnInit();

    expect(component.loading).toBeFalse();
    expect(component.error).toEqual(error);
  });

});
