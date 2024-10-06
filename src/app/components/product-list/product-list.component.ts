import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { RouterLink , RouterOutlet } from '@angular/router';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

products: Product[] = [];
constructor(private productService: ProductService){ }
ngOnInit(): void {
  this.products=this.productService.getProducts();

}
}
