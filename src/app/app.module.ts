import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentComponent} from  './student.component'
import {TecherComponent} from './teacher.component'
import { fromEventPattern } from 'rxjs';
import { CubePipe } from './pipe/cube.pipe';
import { TemplateFormComponent } from './Forms/template.component';
import { DoctorComponent } from './Forms/doctor.component';
import { ModelFormComponent } from './Forms/model.component';

@NgModule({
  declarations: [ // Directives - Comp/attri/structural & pipe
    AppComponent,
    StudentComponent,
    TecherComponent,
    CubePipe,
    TemplateFormComponent,
    DoctorComponent,
    ModelFormComponent
  ],
  imports: [ // Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], // services - Injectable
  bootstrap: [ModelFormComponent]// Only component directives which we want to set as startup component
})
export class AppModule { }
