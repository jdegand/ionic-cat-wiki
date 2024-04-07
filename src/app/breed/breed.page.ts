import { Component, Input, OnInit, inject } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';
import { map, mergeMap, forkJoin } from 'rxjs';
import { BubbleComponent } from '../components/bubble/bubble.component';
import Breed2 from '../interfaces/Breed2';
import Image2 from '../interfaces/Image2';
import MergeMapResponse from '../interfaces/MergeMapResponse';
import { ApiHttpClientService } from '../services/api-http-client.service';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [BubbleComponent, IonContent, IonHeader, IonTitle, IonToolbar],
  templateUrl: './breed.page.html',
  styleUrl: './breed.page.scss'
})
export class BreedPage implements OnInit {
  @Input() name = '';
  breed: Breed2[] = [];

  // have to worry about what exists on the interface
  // if it is an optional field, you can't use it as track value in template
  // changed the track function to just use breed while I made typescript improvements

  loading = true;

  title = inject(Title);

  data!: MergeMapResponse;
  filteredImages: string[] = [];

  httpService = inject(ApiHttpClientService);

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
    ).subscribe(response => {
      this.data = response;
      this.loading = false;
      this.filteredImages = Array.from(new Set(this.data.images.map((el: Image2) => el.url).filter(el => el !== this.data.hero.url).filter(el => el !== this.data.hero.url)));
    })
  }

  ngOnInit() {
    this.title.setTitle(this.name + " details");
    this.retrieveBreedData();
  }

}
