import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-name-table',
  styleUrls: ['./name-table.component.scss'],
  templateUrl: './name-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameTableComponent {
}
