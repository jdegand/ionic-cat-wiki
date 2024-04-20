import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeaheadComponent } from './typeahead.component';
import { SearchbarCustomEvent } from 'src/app/interfaces/SearchbarCustomEvent';

describe('TypeaheadComponent', () => {
  let component: TypeaheadComponent;
  let fixture: ComponentFixture<TypeaheadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), TypeaheadComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeaheadComponent);
    component = fixture.componentInstance;
    component.items = ["Ragdoll", "Birman", "Bombay"];
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selectionCancel event', () => {
    const selectionCancelSpy = jasmine.createSpyObj('selectionCancel', ['emit']);
    component.selectionCancel = selectionCancelSpy;

    component.cancelChanges();

    expect(selectionCancelSpy.emit).toHaveBeenCalled();
  });

  it('should set filteredItems to items when searchQuery is undefined', () => {
    fixture.detectChanges();
    component.filterList(undefined);
    expect(component.filteredItems).toEqual(component.items);
  });

  it('should filter items based on searchQuery', () => {
    fixture.detectChanges();
    component.filterList('ragdoll');
    expect(component.filteredItems).toEqual(['Ragdoll']);
  });

  it('should filter items based on searchQuery (case insensitive)', () => {
    fixture.detectChanges();
    component.filterList('BIRMAN');
    expect(component.filteredItems).toEqual(['Birman']);
  });

  it('should call filterList with the input value from the event', () => {
    const inputValue = 'bombay';
    //const event = { target: { value: inputValue } };
    const event = { detail: { value: inputValue } } as SearchbarCustomEvent;

    spyOn(component, 'filterList');

    component.searchbarInput(event);

    expect(component.filterList).toHaveBeenCalledWith(inputValue);
  });

  it('should update selectedValue with event detail value', () => {
    const mockEvent = { detail: { value: 'bombay' } };
    // const mockEvent = { detail: { value: 'bombay' } } as RadioGroupCustomEvent; 
    // missing target property -> needs to be HTMLIonRadioGroupElement

    component.radioSelected(mockEvent);

    expect(component.selectedValue).toEqual('bombay');
  });

  it('should emit selectionChange event and navigate to the correct route', () => {
    const selectionChangeSpy = jasmine.createSpyObj('selectionChange', ['emit']);
    component.selectionChange = selectionChangeSpy;

    // Had to make the router `public` to mock it like this
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    component.router = routerSpy;

    const selectedValue = 'ragdoll';

    component.selectedValue = selectedValue;
    component.confirmChanges();

    expect(selectionChangeSpy.emit).toHaveBeenCalledWith(selectedValue);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/breed', selectedValue]);
  });

});
