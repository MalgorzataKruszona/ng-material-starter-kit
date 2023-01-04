import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NameTableComponent } from './name-table.component';

@NgModule({
  imports: [MatTableModule, MatCardModule],
  declarations: [NameTableComponent],
  providers: [],
  exports: [NameTableComponent]
})
export class NameTableComponentModule {
}
