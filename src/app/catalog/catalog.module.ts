import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service';
import { FilterClassesService } from './filter-classes.service';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [ CatalogComponent ],
  declarations: [
    CatalogComponent
  ],
  providers: [ CatalogRepositoryService, FilterClassesService ],
  bootstrap: []
})
export class CatalogModule { }
