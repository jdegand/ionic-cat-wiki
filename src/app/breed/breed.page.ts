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

  constructor(private httpService: ApiHttpClientService) { }

  retrieveBreedData() {
    this.httpService.getBreedBySearchTerm(this.name).pipe(
      map((breed: Breed2[]) => {
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
