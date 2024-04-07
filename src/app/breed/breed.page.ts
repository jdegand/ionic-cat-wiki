import { Component, Input, OnInit, inject } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { map, mergeMap, forkJoin, Subscription } from 'rxjs';
import { BubbleComponent } from '../components/bubble/bubble.component';
import Breed2 from '../interfaces/Breed2';
import Image2 from '../interfaces/Image2';
import MergeMapResponse from '../interfaces/MergeMapResponse';
import { ApiHttpClientService } from '../services/api-http-client.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [BubbleComponent, IonContent, IonHeader, IonTitle, IonToolbar, TitleCasePipe],
  templateUrl: './breed.page.html',
  styleUrl: './breed.page.scss'
})
export class BreedPage implements OnInit{
  @Input() name = '';
  breed: Breed2[] = [];
  loading = true;
  private subscription!: Subscription;
  data!: MergeMapResponse;
  filteredImages: string[] = [];

  httpService = inject(ApiHttpClientService);

  retrieveBreedData() {
    this.subscription = this.httpService.getBreedBySearchTerm(this.name).pipe(
      map((breed: Breed2[]) => {
        this.breed = breed;
        return breed;
      }),
      mergeMap((breed: Breed2[]) => {
        const hero = this.httpService.getHeroImage(breed);
        const images = this.httpService.getOtherImageUrls(breed);
        return forkJoin({ hero, images });
      })
    ).subscribe(response => {
      setInterval(()=> console.log('here'), 500);
      this.data = response;
      this.loading = false;
      this.filteredImages = Array.from(new Set(this.data.images.map((el: Image2) => el.url).filter(el => el !== this.data.hero.url).filter(el => el !== this.data.hero.url)));
    })
  }

  // change this to an ionic lifecycle hook
  // need another one to destroy the subscription as well
  ngOnInit() {
    this.retrieveBreedData();
  }

  /*
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  */


}
