import { Component, Input, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner } from '@ionic/angular/standalone';
import { map, mergeMap, forkJoin } from 'rxjs';
import { BubbleComponent } from '../components/bubble/bubble.component';
import Breed2 from '../interfaces/Breed2';
import Image2 from '../interfaces/Image2';
import MergeMapResponse from '../interfaces/MergeMapResponse';
import { ApiHttpClientService } from '../services/api-http-client.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [BubbleComponent, IonContent, IonHeader, IonTitle, IonToolbar, TitleCasePipe, IonSpinner],
  templateUrl: './breed.page.html',
  styleUrl: './breed.page.scss'
})
export class BreedPage implements OnInit {
  @Input() name = '';
  breed: Breed2[] = [];
  loading = true;
  data!: MergeMapResponse;
  filteredImages: string[] = [];
  error: unknown;

  constructor(private httpService: ApiHttpClientService){}

  retrieveBreedData() {
    this.httpService.getBreedBySearchTerm(this.name).pipe(
      map((breed: Breed2[]) => {
        console.log('breed', breed)
        this.breed = breed;
        return breed;
      }),
      mergeMap((breed: Breed2[]) => {
        const hero = this.httpService.getHeroImage(breed);
        const images = this.httpService.getOtherImageUrls(breed);
        return forkJoin({ hero, images });
      })
    ).subscribe({
      next: (response: MergeMapResponse) => {
          this.data = response;
          this.loading = false;
          this.filteredImages = Array.from(new Set(this.data.images.map((el: Image2) => el.url).filter(el => el !== this.data.hero.url).filter(el => el !== this.data.hero.url)));
      }, 
      error: (err: unknown) => {
        this.loading = false;
        this.error = err;
      }
    })
  }

  ngOnInit() {
    this.retrieveBreedData();
  }

}

/*

    const breed =[
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
  ]

  this.httpService.getOtherImageUrls(breed).subscribe(data => console.log('data', data));
*/