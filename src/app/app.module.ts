import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { LeccionNgForComponent } from './leccion-ng-for/leccion-ng-for.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NgIfNgClassNgForComponent } from './ng-if-ng-class-ng-for/ng-if-ng-class-ng-for.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'contenido', component: ContenidoComponent },
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'listas', component: LeccionNgForComponent },
  { path: '', component: NgIfNgClassNgForComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    LeccionNgForComponent,
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    ContactoComponent,
    NgIfNgClassNgForComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
