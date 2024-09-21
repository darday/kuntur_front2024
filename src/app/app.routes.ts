import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPrincipalComponent } from './components/news-principal/news-principal.component';
import { SingleNewsComponent } from './pages/single-news/single-news.component';
import { OficialSelectionComponent } from './pages/oficial-selection/oficial-selection.component';
import { LargoFiccionComponent } from './pages/largo-ficcion/largo-ficcion.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },  // Página principal
    { path: 'single-news/:id', component: SingleNewsComponent },  // Ruta para las noticias individuales con el ID
    { path: 'seleccion-oficial', component: OficialSelectionComponent },  // Ruta para las noticias individuales con el ID
    { path: 'largometraje-ficcion', component: LargoFiccionComponent },  // Ruta para las noticias individuales con el ID

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }