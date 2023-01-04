import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NamaListComponent } from './nama-list.component';

@NgModule({
  imports: [MatCardModule],
  declarations: [NamaListComponent],
  providers: [],
  exports: [NamaListComponent]
})
export class NamaListComponentModule {
}
