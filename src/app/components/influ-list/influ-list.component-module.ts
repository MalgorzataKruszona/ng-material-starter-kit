import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { InfluListComponent } from './influ-list.component';

@NgModule({
  imports: [MatCardModule, MatToolbarModule, MatListModule, CommonModule, MatChipsModule],
  declarations: [InfluListComponent],
  providers: [],
  exports: [InfluListComponent]
})
export class InfluListComponentModule {
}
