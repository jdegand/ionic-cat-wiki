import { Component } from '@angular/core';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [IonFooter, IonToolbar, IonTitle]
})
export class FooterComponent {

}
