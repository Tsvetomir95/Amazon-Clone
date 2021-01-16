import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    MatPaginatorModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    MatPaginatorModule,
    MatProgressSpinnerModule,
    
  ]
})
export class MaterialModule { }
