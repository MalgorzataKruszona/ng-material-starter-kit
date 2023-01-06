import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-table',
  styleUrls: ['./crypto-table.component.scss'],
  templateUrl: './crypto-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoTableComponent {
  readonly CryptoTable$: Observable<CryptoModel[]> = this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {
  }
}
