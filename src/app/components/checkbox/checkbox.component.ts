import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { CheckboxService } from '../../services/checkbox.service';

@Component({
  selector: 'app-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  readonly Checkbox$: Observable<string[]> = this._checkboxService.getAll().pipe(
  map(() => [])
  )
  ;;

  constructor(private _checkboxService: CheckboxService) {}
}
