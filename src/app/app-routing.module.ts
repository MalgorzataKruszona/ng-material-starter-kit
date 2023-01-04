import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckboxComponentModule } from './components/checkbox/checkbox.component-module';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoService } from './services/crypto.service';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ListComponent } from './components/list/list.component';
import { ListComponentModule } from './components/list/list.component-module';
import { RadioComponentModule } from './components/radio/radio.component-module';
import { RadioComponent } from './components/radio/radio.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { SelectionModel } from '@angular/cdk/collections';
import { SelectionComponentModule } from './components/selection/selection.component-module';
import { SelectionComponent } from './components/selection/selection.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'crypto', component: CryptoComponent},
    {path: 'checkbox-categories', component: CheckboxComponent},
    {path: 'categories-menu', component: ListComponent},
    {path: 'list-1-single-radio-crypto', component: RadioComponent},
    {path: 'public-holidays', component: HolidaysComponent},
    {path: 'categories', component: SelectionComponent},
  ]), CryptoComponentModule, CheckboxComponentModule, ListComponentModule, RadioComponentModule, HolidaysComponentModule, SelectionComponentModule],

  exports: [RouterModule]
})
export class AppRoutingModule {}
