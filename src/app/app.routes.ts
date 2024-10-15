import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPrincipalComponent } from './components/news-principal/news-principal.component';
import { SingleNewsComponent } from './pages/single-news/single-news.component';
import { OficialSelectionComponent } from './pages/oficial-selection/oficial-selection.component';
import { LargoFiccionComponent } from './pages/largo-ficcion/largo-ficcion.component';
import { LargoDocumentalComponent } from './pages/largo-documental/largo-documental.component';
import { CortoFiccionComponent } from './pages/corto-ficcion/corto-ficcion.component';
import { CortoDocumentalComponent } from './pages/corto-documental/corto-documental.component';
import { CortoUnivFiccionComponent } from './pages/corto-univ-ficcion/corto-univ-ficcion.component';
import { CortoUnivDocumentalComponent } from './pages/corto-univ-documental/corto-univ-documental.component';
import { CortoInternacionalComponent } from './pages/corto-internacional/corto-internacional.component';
import { SingleFilmComponent } from './pages/single-film/single-film.component';
import { AcercaFestivalComponent } from './pages/acerca-festival/acerca-festival.component';
import { JudgesComponent } from './pages/judges/judges.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },  // Página principal
    { path: 'single-news/:id', component: SingleNewsComponent },  // Ruta para las noticias individuales con el ID
    { path: 'seleccion-oficial', component: OficialSelectionComponent },  // Ruta para las noticias individuales con el ID
    { path: 'largometraje-ficcion', component: LargoFiccionComponent },  // Ruta para las noticias individuales con el ID
    { path: 'largometraje-documental', component: LargoDocumentalComponent },  // Ruta para las noticias individuales con el ID
    { path: 'cortometraje-ficcion', component: CortoFiccionComponent },  // Ruta para las noticias individuales con el ID
    { path: 'cortometraje-documental', component: CortoDocumentalComponent },  // Ruta para las noticias individuales con el ID
    { path: 'cortometraje-univ-ficcion', component: CortoUnivFiccionComponent },  // Ruta para las noticias individuales con el ID
    { path: 'cortometraje-univ-documental', component: CortoUnivDocumentalComponent },  // Ruta para las noticias individuales con el ID
    { path: 'cortometraje-internacionales', component: CortoInternacionalComponent },  // Ruta para las noticias individuales con el ID
    
    { path: 'acerca-del-festival', component: AcercaFestivalComponent },  // Ruta para las noticias individuales con el ID
    { path: 'jurado', component: JudgesComponent },  // Ruta para las noticias individuales con el ID
    
    
    { path: 'single-film/:id', component: SingleFilmComponent },  // Ruta para las noticias individuales con el ID
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }