import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';



import { AppDataset } from './svc/app-dataset.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiInputAComponent } from './api/cmp/api-input-a/api-input-a.component';
import { ApiFormAComponent } from './api/cmp/api-form-a/api-form-a.component';
import { ApiFormBComponent } from './api/cmp/api-form-b/api-form-b.component';
import { DetPlantComponent } from './cmp/det-plant/det-plant.component';
import { NavBarComponent } from './cmp/nav-bar/nav-bar.component';
import { TestSandboxAComponent } from './cmp/test-sandbox-a/test-sandbox-a.component';
import { TestFormAComponent } from './cmp/test-form-a/test-form-a.component';
import { TestFormBComponent } from './cmp/test-form-b/test-form-b.component';
import { SandboxComponent } from './cmp/sandbox/sandbox.component';
import { ApiTableAComponent } from './api/cmp/api-table-a/api-table-a.component';
import { ApiTableColumnAComponent } from './api/cmp/api-table-column-a/api-table-column-a.component';
import { ApiDataFilterAComponent } from './api/cmp/api-data-filter-a/api-data-filter-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiInputAComponent,
    ApiFormAComponent,
    ApiFormBComponent,
    DetPlantComponent,
    NavBarComponent,
    TestSandboxAComponent,
    TestFormAComponent,
    TestFormBComponent,
    SandboxComponent,
    ApiTableAComponent,
    ApiTableColumnAComponent,
    ApiDataFilterAComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AppDataset],
  bootstrap: [AppComponent]
})
export class AppModule { }
