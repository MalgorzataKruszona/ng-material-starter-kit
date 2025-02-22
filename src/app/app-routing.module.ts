import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NamaListComponent } from './components/nama-list/nama-list.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ListComponent } from './components/list/list.component';
import { RadioComponent } from './components/radio/radio.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { SelectionComponent } from './components/selection/selection.component';
import { NameTableComponent } from './components/name-table/name-table.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MultiListComponent } from './components/multi-list/multi-list.component';
import { MultiListTableComponent } from './components/multi-list-table/multi-list-table.component';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { JobPostTableComponent } from './components/job-post-table/job-post-table.component';
import { JobPostGridListComponent } from './components/job-post-grid-list/job-post-grid-list.component';
import { InfluListComponent } from './components/influ-list/influ-list.component';
import { NameFormComponent } from './components/name-form/name-form.component';
import { AgeFormComponent } from './components/age-form/age-form.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { PolishUniversitiesComponent } from './components/polish-universities/polish-universities.component';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CheckboxComponentModule } from './components/checkbox/checkbox.component-module';
import { ListComponentModule } from './components/list/list.component-module';
import { RadioComponentModule } from './components/radio/radio.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { SelectionComponentModule } from './components/selection/selection.component-module';
import { NamaListComponentModule } from './components/nama-list/nama-list.component-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { MultiListComponentModule } from './components/multi-list/multi-list.component-module';
import { MultiListTableComponentModule } from './components/multi-list-table/multi-list-table.component-module';
import { CryptoTableComponentModule } from './components/crypto-table/crypto-table.component-module';
import { JobPostTableComponentModule } from './components/job-post-table/job-post-table.component-module';
import { JobPostGridListComponentModule } from './components/job-post-grid-list/job-post-grid-list.component-module';
import { InfluListComponentModule } from './components/influ-list/influ-list.component-module';
import { NameFormComponentModule } from './components/name-form/name-form.component-module';
import { AgeFormComponentModule } from './components/age-form/age-form.component-module';
import { EmailFormComponentModule } from './components/email-form/email-form.component-module';
import { CommentComponentModule } from './components/comment/comment.component-module';
import { UserRoleComponentModule } from './components/user-role/user-role.component-module';
import { PolishUniversitiesComponentModule } from './components/polish-universities/polish-universities.component-module';

;


@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'list-1-single-list-names', component: NamaListComponent },
    { path: 'crypto', component: CryptoComponent },
    { path: 'checkbox-categories', component: CheckboxComponent },
    { path: 'categories-menu', component: ListComponent },
    { path: 'list-1-single-radio-crypto', component: RadioComponent },
    { path: 'public-holidays', component: HolidaysComponent },
    { path: 'categories', component: SelectionComponent },
    { path: 'list-1-single-table-names', component: NameTableComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'list-1-multi-list-products', component: MultiListComponent },
    { path: 'product-search', component: MultiListTableComponent },
    { path: 'crypto-table', component: CryptoTableComponent },
    { path: 'job-post-table', component: JobPostTableComponent },
    { path: 'list-1-multi-grid-list-jobs', component: JobPostGridListComponent },
    { path: 'list-1-nested-list-influencers', component: InfluListComponent },
    { path: 'form-1-control-name', component: NameFormComponent },
    { path: 'form-1-control-age', component: AgeFormComponent },
    { path: 'form-1-control-email', component: EmailFormComponent },
    { path: 'form-1-control-comment', component: CommentComponent },
    { path: 'form-1-control-select-user-roles', component: UserRoleComponent },
    { path: 'form-1-control-radio-universities', component: PolishUniversitiesComponent }
  ]), CryptoComponentModule, CheckboxComponentModule, ListComponentModule, RadioComponentModule, HolidaysComponentModule, SelectionComponentModule, NamaListComponentModule, ProductListComponentModule, MultiListComponentModule, MultiListTableComponentModule, CryptoTableComponentModule, JobPostTableComponentModule, JobPostGridListComponentModule, InfluListComponentModule, NameFormComponentModule, AgeFormComponentModule, EmailFormComponentModule, CommentComponentModule, UserRoleComponentModule, PolishUniversitiesComponentModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
