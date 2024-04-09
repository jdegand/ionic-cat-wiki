import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonInput, IonImg, IonButton } from '@ionic/angular/standalone';
import { Breed } from '../interfaces/Breed';
import { ApiHttpClientService } from '../services/api-http-client.service';
import { NgClass } from '@angular/common';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonInput, IonImg, IonButton, NgClass, RouterLink, FormsModule],
})
export class HomePage implements OnInit {

  breeds: Breed[] = [];
  featuredBreeds: Breed[] = [];

  constructor(private router: Router, private apiHttpClientService: ApiHttpClientService) {
    addIcons({ searchOutline });
  }

  @ViewChild('form')
  public userForm!: NgForm;

  handleSuggestion = (event: any) => {
    this.userForm.form.controls['search'].setValue(event.target.innerText);
  }

  ngOnInit() {
    this.apiHttpClientService.fetchBreeds().subscribe({
      next: (data: Breed[]) => {
        this.breeds = data;
        this.featuredBreeds = data.filter((element: Breed) => ['beng', 'sava', 'norw', 'srex'].indexOf(element.id) != -1);
      },
      error: (err: unknown) => {
        console.error(err);
      }
    })
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/breed', form.value.search]);
    }
  }

}
