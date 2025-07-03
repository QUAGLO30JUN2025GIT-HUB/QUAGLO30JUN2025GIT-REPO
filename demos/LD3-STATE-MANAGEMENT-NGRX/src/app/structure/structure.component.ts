import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../packagesize.action';
@Component({
  selector: 'app-structure',
  // standalone: true,
  // imports: [],
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.css'
})
export class StructureComponent {
  // The packageSize$ is an Observable that will emit the size of the package from the store.
  packagesize$: Observable<number>;
  constructor(private store: Store<{ packagesize: number }>) {
    // The component reactively receives the updates of packagesize from the store.
    // The select method is used to select a slice of state from the store.
    // It takes a selector function that returns the desired slice of state.
    this.packagesize$ = this.store.select('packagesize');
  }
  incrementFromComponent() {
    // The incrementFromComponent method is called when the user clicks the button in the template.
    // It dispatches the increment action to the store. 
    // This will trigger the reducer to update the state.
    // The dispatch method is used to send an action to the store.
    this.store.dispatch(increment());
  }
  decrementFromComponent() {

    this.store.dispatch(decrement());
  }
}
