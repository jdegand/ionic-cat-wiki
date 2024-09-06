import { NgFor, TitleCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonSearchbar, IonButton, IonButtons, IonCheckbox, IonRadioGroup, IonRadio } from '@ionic/angular/standalone';

@Component({
  selector: 'app-typeahead',
  templateUrl: 'typeahead.component.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonSearchbar, IonButton, IonButtons, IonCheckbox, NgFor, IonRadioGroup, IonRadio, TitleCasePipe]
})
export class TypeaheadComponent implements OnInit {
  @Input() items: string[] = [];
  @Input() selectedItem = '';
  @Input() title = 'Select One';

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string>();

  constructor(public router: Router) { }

  filteredItems: string[] = [];
  selectedValue = '';

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.selectedValue = this.selectedItem;
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.selectedValue);
    this.router.navigate(['/breed', this.selectedValue]);
  }

  searchbarInput(ev: any) {
    // SearchbarCustomEvent -> null error when adding this
    this.filterList(ev.target.value);
    // this.filterList(ev.target.value ?? "") -> this fix creates an extra branch in testing
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

  radioSelected(event: any) {  // RadioGroupCustomEvent<string>
    this.selectedValue = event.detail.value;
  }

}
