import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { CryptoModel } from 'src/app/models/crypto.model';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto',
  styleUrls: ['./crypto.component.scss'],
  templateUrl: './crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoComponent {
  readonly Crypto$: Observable<CryptoModel[]> = this._CryptoService.getAll().pipe(
    map(() => [])
  );;

  constructor(private _CryptoService: CryptoService){}
}
