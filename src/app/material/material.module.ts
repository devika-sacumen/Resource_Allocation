import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule }from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule }from '@angular/material/sort';
import { MatIconModule }from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

const materialComponents =[MatTableModule, MatCardModule, MatDialogModule, MatButtonModule, MatToolbarModule, MatPaginatorModule, MatRadioModule, MatSortModule, MatIconModule];

@NgModule({
  imports: [ materialComponents ],
  exports: [ materialComponents ]
})
export class MaterialModule { }
