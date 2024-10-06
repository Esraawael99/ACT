import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[]=[
    {id: 1,name: 'Product 1', description: 'VOWNER Coffee Table, Extendable Height-Adjustable Coffee Table, Living Room Table, Sturdy Lift Top Table, Easy to Lift ' , price: 99.99 , imageUrl: ''},
    {id: 2,name: 'Product 2', description: '50 Inch 4K Ultra HD Smart TV, Black - TH-50HX650E' , price: 10 , imageUrl: ''},
    {id: 3,name: 'Product 3', description: 'Smart Camera C200 with 1080p Resolution, 360 Degrees View, AI Human Detection, Two-Way Calling, and Compatibility with Google Assistant and Amazon Alexa for Comprehensive Home Security' , price: 88 , imageUrl: ''},
    {id: 4,name: 'Product 4', description: 'this is product 1' , price: 234 , imageUrl: ''},
    {id: 5,name: 'Product 5', description: '50 Inch 4K Ultra HD Smart TV, Black - TH-50HX650E' , price: 987 , imageUrl: ''},
    {id: 6,name: 'Product 6', description: 'this is product 1' , price: 23 , imageUrl: ''},
    {id: 7,name: 'Product 7', description: 'this is product 1' , price: 100 , imageUrl: ''},
    {id: 8,name: 'Product 8', description: 'this is product 1' , price: 990 , imageUrl: ''},
    {id: 9,name: 'Product 9', description: 'this is product 1' , price: 400 , imageUrl: ''},
    {id: 10,name: 'Product 10', description: 'this is product 1' , price: 35 , imageUrl: ''},
    {id: 11,name: 'Product 11', description: 'Smart Camera C200 with 1080p Resolution, 360 Degrees View, AI Human Detection, Two-Way Calling, and Compatibility with Google Assistant and Amazon Alexa for Comprehensive Home Security' , price: 7000 , imageUrl: ''},
    {id: 12,name: 'Product 12', description: 'VOWNER Coffee Table, Extendable Height-Adjustable Coffee Table, Living Room Table, Sturdy Lift Top Table, Easy to Lift' , price: 99.99 , imageUrl: ''},
  ];

  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product |undefined {
    return this.products.find(product => product.id === id);
  }
}
