import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceService } from './shared/resource.service';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';
import { ResourcesComponent } from './resource/resources/resources.component';
import { ResourceComponent } from './resource/resource/resource.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ResourceListComponent,
    ResourcesComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent],
  entryComponents:[ResourceComponent]
})
export class AppModule { }
