import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MultiListTableComponent } from './multi-list-table.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [MultiListTableComponent],
  providers: [],
  exports: [MultiListTableComponent]
})
export class MultiListTableComponentModule {
}
