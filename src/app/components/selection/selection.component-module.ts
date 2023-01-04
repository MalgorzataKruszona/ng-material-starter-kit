import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SelectionComponent } from './selection.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [SelectionComponent],
  providers: [],
  exports: [SelectionComponent]
})
export class SelectionComponentModule {
}
