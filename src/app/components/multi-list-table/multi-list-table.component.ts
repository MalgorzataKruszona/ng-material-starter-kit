import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-multi-list-table',
  styleUrls: ['./multi-list-table.component.scss'],
  templateUrl: './multi-list-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiListTableComponent {
  readonly MultiListTable$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }
}
