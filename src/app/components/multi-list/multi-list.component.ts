import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-multi-list',
  styleUrls: ['./multi-list.component.scss'],
  templateUrl: './multi-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiListComponent {
  readonly MultiList$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }
}
