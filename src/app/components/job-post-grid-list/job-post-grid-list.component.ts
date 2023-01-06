import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostsModel } from '../../models/job-posts.model';
import { JobPostsService } from '../../services/job-posts.service';

@Component({
  selector: 'app-job-post-grid-list',
  styleUrls: ['./job-post-grid-list.component.scss'],
  templateUrl: './job-post-grid-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostGridListComponent {
  readonly JobPostGridList$: Observable<JobPostsModel[]> = this._jobPostsService.getAll();

  constructor(private _jobPostsService: JobPostsService) {
  }
}
