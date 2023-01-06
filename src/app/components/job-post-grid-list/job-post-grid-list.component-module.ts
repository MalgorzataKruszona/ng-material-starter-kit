import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { JobPostGridListComponent } from './job-post-grid-list.component';

@NgModule({
  imports: [MatCardModule, MatGridListModule, CommonModule],
  declarations: [JobPostGridListComponent],
  providers: [],
  exports: [JobPostGridListComponent]
})
export class JobPostGridListComponentModule {
}
