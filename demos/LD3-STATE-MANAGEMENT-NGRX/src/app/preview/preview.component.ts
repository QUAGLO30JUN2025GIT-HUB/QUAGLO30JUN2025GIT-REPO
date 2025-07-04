import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../packagesize.action';

@Component({
  selector: 'app-preview',
  // standalone: true,
  // imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  packagesize$: Observable<number>;
  constructor(private store: Store<{ packagesize: number }>) {
    this.packagesize$ = store.select('packagesize');
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

