import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { DirectivesModule } from './directives/directives.module';
import { AngularPipesComponent } from './pipes/angular-pipes/angular-pipes.component';
import { CamelcasePipe } from './pipes/camel-case/camelcase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AngularPipesComponent,
    CamelcasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
