import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nama-list',
  styleUrls: ['./nama-list.component.scss'],
  templateUrl: './nama-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamaListComponent {
}
