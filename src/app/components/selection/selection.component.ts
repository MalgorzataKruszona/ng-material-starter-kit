import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { CheckboxService } from '../../services/checkbox.service';

@Component({
  selector: 'app-selection',
  styleUrls: ['./selection.component.scss'],
  templateUrl: './selection.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionComponent {
  readonly Selection$: Observable<string[]> = this._checkboxService.getAll().pipe(
    map(() => [])
  );;

  constructor(private _checkboxService: CheckboxService) {
  }
}
