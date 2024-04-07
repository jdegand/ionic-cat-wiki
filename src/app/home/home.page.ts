import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonSearchbar, IonImg } from '@ionic/angular/standalone';
import { Breed } from '../interfaces/Breed';
import { ApiHttpClientService } from '../services/api-http-client.service';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonSearchbar, IonImg, NgClass, RouterLink, FormsModule],
})
export class HomePage implements OnInit {

  breeds: Breed[] = [];
  featuredBreeds: Breed[] = [];
  private subscription!: Subscription;

  apiHttpClientService = inject(ApiHttpClientService);
  router = inject(Router);

  @ViewChild('form')
  public userForm!: NgForm;

  handleSuggestion = (event: any) => {
    this.userForm.form.controls['search'].setValue(event.target.innerText);
  }

  ngOnInit() {
    this.subscription = this.apiHttpClientService.fetchBreeds().subscribe((data: Breed[]) => {
      this.breeds = data;
      this.featuredBreeds = data.filter((element:Breed)=> ['beng', 'sava', 'norw', 'srex'].indexOf(element.id) != -1 );
    })
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/breed', form.value.search]);
    }
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
