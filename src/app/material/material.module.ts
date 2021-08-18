import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
const materialComponents =[MatTableModule,MatCardModule];

@NgModule({
  imports: [ materialComponents ],
  exports: [ materialComponents ]
})
export class MaterialModule { }
