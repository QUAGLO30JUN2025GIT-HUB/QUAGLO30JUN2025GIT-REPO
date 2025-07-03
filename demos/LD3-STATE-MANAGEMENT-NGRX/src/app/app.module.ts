import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StructureComponent } from "./structure/structure.component";
import { PreviewComponent } from "./preview/preview.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { packageSizeReducer } from "./packagesize.reducer";

@NgModule({
  declarations: [AppComponent, StructureComponent,PreviewComponent],
  imports: [BrowserModule, CommonModule, StoreModule.forRoot({packagesize : packageSizeReducer})],
  // The packagesize slice of the state is managed by the packageSizeReducer.
  // The packagesize is the key for the slice of state that this reducer manages.
  // The packagesize slice can be accessed in components using the Store service.
  // Whenever the state changes, the Store service will notify the components that are subscribed to the packagesize slice.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// 1. Get the Store Module.