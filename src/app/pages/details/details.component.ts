import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  productDetail: Product | undefined;
  constructor(){
    const idProduct = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(idProduct).subscribe(
      data => this.productDetail = data,
      error => console.log('ERROR'), //si hay un error mientras se envía el flujo de datos
      ()=> console.log('END')
    )
   console.log(this.productDetail)
  }
}
