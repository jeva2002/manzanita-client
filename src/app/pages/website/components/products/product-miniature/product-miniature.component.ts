import { Component, Input } from '@angular/core';
import { ProductMiniature } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-miniature',
  templateUrl: './product-miniature.component.html',
  styleUrls: ['./product-miniature.component.scss'],
})
export class ProductMiniatureComponent {
  @Input() product: ProductMiniature | null = null;
}
