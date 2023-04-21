import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  @Input() product!: Product;
}
