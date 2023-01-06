import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluencersModel } from '../../models/influencers.model';
import { InfluencersService } from '../../services/influencers.service';

@Component({
  selector: 'app-influ-list',
  styleUrls: ['./influ-list.component.scss'],
  templateUrl: './influ-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluListComponent {
  readonly influList$: Observable<InfluencersModel[]> = this._influencersService.getAll();

  constructor(private _influencersService: InfluencersService) {
  }
}
