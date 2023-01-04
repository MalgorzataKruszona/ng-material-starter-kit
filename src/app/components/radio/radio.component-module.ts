import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { RadioComponent } from './radio.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule, MatStepperModule, MatButtonModule],
  declarations: [RadioComponent],
  providers: [],
  exports: [RadioComponent]
})
export class RadioComponentModule {
}
