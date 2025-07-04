// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'lib-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent {
//   @Input() products: { name: string; price: number; imageUrl: string }[] = [];
// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
// The export here makes the ProductListComponent available for use in other parts of the application because in javascript, classes are not automatically exported. In TypeScript, you need to explicitly export a class to make it available outside its module.
// In angular, exporting a component allows it to be used in other components or modules. This is essential for building reusable components in Angular applications.
export class ProductListComponent {
  @Input() products: { name: string; price: number; imageUrl: string }[] = [];
}
