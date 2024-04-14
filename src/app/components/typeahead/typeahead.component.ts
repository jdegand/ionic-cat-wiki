import { NgFor, TitleCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonSearchbar, IonButton, IonButtons, IonCheckbox, IonRadioGroup, IonRadio } from '@ionic/angular/standalone';

@Component({
  selector: 'app-typeahead',
  templateUrl: 'typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonSearchbar, IonButton, IonButtons, IonCheckbox, NgFor, IonRadioGroup, IonRadio, TitleCasePipe]
})
export class TypeaheadComponent implements OnInit {
  @Input() items: string[] = [];
  @Input() selectedItem = '';
  @Input() title = 'Select One';

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string>();

  constructor(private router: Router) { }

  filteredItems: string[] = [];
  selectedValue = '';

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.selectedValue = this.selectedItem;
  }

  /*
  trackItems(index: number, item: any) {
    return item;
  }
  */

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.selectedValue);
    this.router.navigate(['/breed', this.selectedValue]);
  }

  searchbarInput(ev: any) {
    this.filterList(ev.target.value);
  }

  filterList(searchQuery: string | undefined) {
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item: any) => {
        return item.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  radioSelected(event: any) {
    this.selectedValue = event.detail.value;
  }

}
