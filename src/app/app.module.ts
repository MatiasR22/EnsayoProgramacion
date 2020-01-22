import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { PlanillaComponent } from './components/planilla/planilla.component';
import { BloqueComponent } from './components/bloque/bloque.component';
import { ParametrosComponent } from './components/parametros/parametros.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanillaComponent,
    BloqueComponent,
    ParametrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
