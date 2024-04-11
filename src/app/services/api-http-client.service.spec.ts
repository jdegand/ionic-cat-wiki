/*
import { TestBed } from '@angular/core/testing';
import { ApiHttpClientService } from './api-http-client.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ApiHttpClientService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ApiHttpClientService;

  const data = [
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

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = TestBed.inject(ApiHttpClientService);
  });

  it('fetchBreeds()', () => {
    httpClientSpy.get.and.returnValue(of(data));
    service.fetchBreeds().subscribe({
      next: breeds => {
        expect(breeds).toEqual(data);
      }
    })
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
*/

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiHttpClientService } from './api-http-client.service';

describe('ApiHttpClientService (HttpClientTestingModule)', () => {
  let apiHttpClientService: ApiHttpClientService;
  let httpTestingController: HttpTestingController;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHttpClientService],
      imports: [HttpClientTestingModule],
    });

    apiHttpClientService = TestBed.inject(ApiHttpClientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  describe('fetchBreeds()', () => {
    it('should return breeds when fetchBreeds() is called', (done: DoneFn) => {
      apiHttpClientService.fetchBreeds().subscribe((data) => {
        expect(data).toEqual(DATA);
        done();
      });

      const request = httpTestingController.expectOne(
        'https://api.thecatapi.com/v1/breeds'
      );
      request.flush(DATA);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('getBreedBySearchTerm()', () => {
    it('should return single breed when getBreedBySearchTerm is called with name', () => {
      apiHttpClientService.getBreedBySearchTerm('bengal').subscribe();

      const request = httpTestingController.expectOne(
        `https://api.thecatapi.com/v1/breeds/search?q=bengal`
      );

      expect(request.request.method).toBe('GET');
    });
  });

  describe('getHeroImage()', () => {
    it('should return main image when getHeroImage is called', () => {
      apiHttpClientService.getHeroImage([DATA[0]]).subscribe();

      const request = httpTestingController.expectOne(
        `https://api.thecatapi.com/v1/images/O3btzLlsO`
      );

      expect(request.request.method).toBe('GET');
    });
  });

  describe('getOtherImageUrls()', () => {
    it('should return other images when getOtherImageUrls is called', () => {
      apiHttpClientService.getOtherImageUrls([DATA[0]]).subscribe();

      const request = httpTestingController.expectOne(
        `https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=beng`
      );

      expect(request.request.method).toBe('GET');
    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});