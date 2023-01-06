import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SelectionComponent } from './selection.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [SelectionComponent],
  providers: [],
  exports: [SelectionComponent]
})
export class SelectionComponentModule {
}
