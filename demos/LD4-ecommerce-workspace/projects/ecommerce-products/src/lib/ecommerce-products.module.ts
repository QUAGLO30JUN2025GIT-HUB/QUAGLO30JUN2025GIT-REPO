// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// // Importing the components
// import { ProductCardComponent } from './product-card/product-card.component';
// import { ProductListComponent } from './product-list/product-list.component';

// @NgModule({
//   declarations: [
//     ProductCardComponent,  // Declare ProductCardComponent here
//     ProductListComponent   // Declare ProductListComponent here
//   ],
//   imports: [CommonModule],  // Import CommonModule for common Angular directives (like ngIf, ngFor)
//   exports: [
//     ProductCardComponent,  // Export ProductCardComponent so it can be used outside this module
//     ProductListComponent   // Export ProductListComponent so it can be used outside this module
//   ]
// })
// export class EcommerceProductsModule {}  // This is the module that needs to be imported into other apps



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import your components here
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductCardComponent,  // Declare the components
    ProductListComponent   // Declare the components
  ],
  imports: [CommonModule],  // Import CommonModule for directives like ngIf, ngFor
  exports: [
    ProductCardComponent,  // Export the components so they can be used outside the module
    ProductListComponent   // Export the components so they can be used outside the module
  ]
})
export class EcommerceProductsModule {}  // This is the library module
