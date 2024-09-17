import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPrincipalComponent } from './components/news-principal/news-principal.component';
import { SingleNewsComponent } from './pages/single-news/single-news.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },  // Página principal

    { path: '', component: NewsPrincipalComponent },  // Ruta principal
    { path: 'news/:id', component: SingleNewsComponent }, // Ruta que incluye el parámetro `id`
    { path: 'single-news/:id', component: SingleNewsComponent },  // Ruta para las noticias individuales con el ID

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }