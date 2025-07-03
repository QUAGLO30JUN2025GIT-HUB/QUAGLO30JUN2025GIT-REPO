import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StructureComponent } from "./structure/structure.component";
import { PreviewComponent } from "./preview/preview.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, StructureComponent,PreviewComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// 1. Get the Store Module.