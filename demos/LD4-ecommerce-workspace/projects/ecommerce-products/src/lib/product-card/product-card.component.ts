import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  // The @Input decorator allows the parent component to pass data to this component.
  // In this case, it allows the parent component to pass a product object with name, price, and imageUrl properties.
  // The product is a variable of type object, which is initialized with default values.
  // The { name: string; price: number; imageUrl: string } type is used to define the shape of the product object.
  // The  {
  //   name: '',
  //   price: 0,
  //   imageUrl: ''
  // };
  // is used to provide default values for the product properties.
  @Input() product: { name: string; price: number; imageUrl: string } = {
    name: '',
    price: 0,
    imageUrl: ''
  };

  onAddToCart() {
    console.log(`${this.product.name} added to cart`);
  }
}