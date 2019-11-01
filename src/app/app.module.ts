import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiInputAComponent } from './api/cmp/api-input-a/api-input-a.component';
import { ApiInputBComponent } from './api/cmp/api-input-b/api-input-b.component';
import { ApiFormAComponent } from './api/cmp/api-form-a/api-form-a.component';
import { ApiFormBComponent } from './api/cmp/api-form-b/api-form-b.component';
import { DetPlantComponent } from './cmp/det-plant/det-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiInputAComponent,
    ApiInputBComponent,
    ApiFormAComponent,
    ApiFormBComponent,
    DetPlantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
