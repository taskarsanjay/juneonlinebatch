import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentComponent} from  './student.component'
import {TecherComponent} from './teacher.component'
import { fromEventPattern } from 'rxjs';
import { CubePipe } from './pipe/cube.pipe';
import { TemplateFormComponent } from './Forms/template.component';

@NgModule({
  declarations: [ // Directives - Comp/attri/structural & pipe
    AppComponent,
    StudentComponent,
    TecherComponent,
    CubePipe,
    TemplateFormComponent
  ],
  imports: [ // Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // services - Injectable
  bootstrap: [TemplateFormComponent]// Only component directives which we want to set as startup component
})
export class AppModule { }
