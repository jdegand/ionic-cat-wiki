import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonSearchbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.page.html',
  styleUrls: ['./breeds.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonListHeader, IonSearchbar, RouterLink]
})
export class BreedsPage {

  public breeds = ["Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Arabian Mau", "Australian Mist", "Balinese", "Bambino", "Bengal", "Birman", "Bombay", "British Longhair", "British Shorthair", "Burmese", "Burmilla", "California Spangled", "Chantilly-Tiffany", "Chartreux", "Chausie", "Cheetoh", "Colorpoint Shorthair", "Cornish Rex", "Cymric", "Cyprus", "Devon Rex", "Donskoy", "Dragon Li", "Egyptian Mau", "European Burmese", "Exotic Shorthair", "Havana Brown", "Himalayan", "Japanese Bobtail", "Javanese", "Khao Manee", "Korat", "Kurilian", "LaPerm", "Maine Coon", "Malayan", "Manx", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Oriental", "Persian", "Pixie-bob", "Ragamuffin", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", "Singapura", "Snowshoe", "Somali", "Sphynx", "Tonkinese", "Toyger", "Turkish Angora", "Turkish Van", "York Chocolate"];

  public results = [...this.breeds];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.breeds.filter((breed) => breed.toLowerCase().indexOf(query) > -1);
  }
}
