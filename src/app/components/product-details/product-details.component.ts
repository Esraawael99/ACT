import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product?: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void{
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.product = this.productService.getProductById(productId);
    });
  
  }

}


