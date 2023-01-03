import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoComponent } from './components/crypto/crypto.component';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoService } from './services/crypto.service';

@NgModule({
  imports: [RouterModule.forRoot([{ 
    path: 'crypto',
    component: CryptoComponent
  }]), CryptoComponentModule,
],

  exports: [RouterModule]
})
export class AppRoutingModule {}
