import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MultiListComponent } from './multi-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [MultiListComponent],
  providers: [],
  exports: [MultiListComponent]
})
export class MultiListComponentModule {
}
