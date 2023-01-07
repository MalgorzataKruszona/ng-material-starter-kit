import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostsModel } from '../../models/job-posts.model';
import { TableTagsModel } from '../../models/table-tags.model';
import { JobPostsService } from '../../services/job-posts.service';
import { TableTagsService } from '../../services/table-tags.service';

@Component({
  selector: 'app-job-post-table',
  styleUrls: ['./job-post-table.component.scss'],
  templateUrl: './job-post-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostTableComponent {
  readonly  JobPostTable$: Observable<JobPostsModel[]> = this._jobPostsService.getAll();
  readonly TableTags$: Observable<TableTagsModel[]> = this._tableTagsService.getAll();

  constructor(private _jobPostsService: JobPostsService, private _tableTagsService: TableTagsService)
  {
  }
}
