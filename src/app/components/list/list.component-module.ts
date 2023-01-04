import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './list.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule],
  declarations: [ListComponent],
  providers: [],
  exports: [ListComponent]
})
export class ListComponentModule {
}
