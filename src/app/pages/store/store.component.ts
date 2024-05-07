import { Component, inject } from '@angular/core';
import { ProductComponent } from '../../elements/product/product.component';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  productList: Product[] = [];

  productService: ProductService = inject(ProductService);

  constructor() {
    this.productList = this.productService.getAllProducts();
  }
 }