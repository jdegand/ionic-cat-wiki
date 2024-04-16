import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonInput, IonImg, IonButton, IonList, IonLabel, IonModal, IonItem, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Breed } from '../interfaces/Breed';
import { ApiHttpClientService } from '../services/api-http-client.service';
import { NgClass } from '@angular/common';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';
import { TypeaheadComponent } from '../components/typeahead/typeahead.component';
import { HttpErrorResponse } from '@angular/common/http';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonInput, IonImg, IonButton, NgClass, RouterLink, FormsModule, IonList, IonLabel, IonModal, TypeaheadComponent, IonItem, IonGrid, IonRow, IonCol, FooterComponent],
})
export class HomePage implements OnInit {
  //breeds: Breed[] = [];
  featuredBreeds: Breed[] = [];

  constructor(private apiHttpClientService: ApiHttpClientService) {
    addIcons({ searchOutline });
  }

  @ViewChild('modal', { static: true }) modal!: IonModal;

  breedSelection: string[] = ["Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Arabian Mau", "Australian Mist", "Balinese", "Bambino", "Bengal", "Birman", "Bombay", "British Longhair", "British Shorthair", "Burmese", "Burmilla", "California Spangled", "Chantilly-Tiffany", "Chartreux", "Chausie", "Cheetoh", "Colorpoint Shorthair", "Cornish Rex", "Cymric", "Cyprus", "Devon Rex", "Donskoy", "Dragon Li", "Egyptian Mau", "European Burmese", "Exotic Shorthair", "Havana Brown", "Himalayan", "Japanese Bobtail", "Javanese", "Khao Manee", "Korat", "Kurilian", "LaPerm", "Maine Coon", "Malayan", "Manx", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Oriental", "Persian", "Pixie-bob", "Ragamuffin", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", "Singapura", "Snowshoe", "Somali", "Sphynx", "Tonkinese", "Toyger", "Turkish Angora", "Turkish Van", "York Chocolate"];

  selectionChanged() {
    this.modal.dismiss();
  }

  ngOnInit() {
    this.apiHttpClientService.fetchBreeds().subscribe({
      next: (data: Breed[]) => {
        // this.breeds = data;  
        // could use the request data in place of breedSelection array
        // but the data is not changing frequently
        // I looked into this when I built my original cat wiki app
        // but I don't think you can make a request just for the 4 breeds I need

        this.featuredBreeds = data.filter((element: Breed) => ['beng', 'sava', 'norw', 'srex'].indexOf(element.id) != -1);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

}
