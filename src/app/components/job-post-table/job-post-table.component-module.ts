import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { JobPostTableComponent } from './job-post-table.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [JobPostTableComponent],
  providers: [],
  exports: [JobPostTableComponent]
})
export class JobPostTableComponentModule {
}
