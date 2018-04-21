import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [ CatalogComponent ],
  declarations: [
    CatalogComponent
  ],
  providers: [ CatalogRepositoryService ],
  bootstrap: []
})
export class CatalogModule { }
