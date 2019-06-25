import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentComponent} from  './student.component'
import {TecherComponent} from './teacher.component'
import { fromEventPattern } from 'rxjs';
import { CubePipe } from './pipe/cube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TecherComponent,
    CubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TecherComponent,StudentComponent]
})
export class AppModule { }
