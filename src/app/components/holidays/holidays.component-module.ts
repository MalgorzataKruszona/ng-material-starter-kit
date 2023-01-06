import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HolidaysComponent } from './holidays.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, FlexModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatOptionModule, MatGridListModule, MatExpansionModule, MatButtonToggleModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule, MatProgressBarModule],
  declarations: [HolidaysComponent],
  providers: [],
  exports: [HolidaysComponent]
})
export class HolidaysComponentModule {
}
