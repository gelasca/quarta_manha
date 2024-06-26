import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListaComponent } from './paginas/lista/lista.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FonteDirective } from './diretivas/fonte.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    FonteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
