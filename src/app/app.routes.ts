import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNewsComponent } from './components/single-news/single-news/single-news.component';

export const routes: Routes = [
    { path: 'news/:id', component: SingleNewsComponent } // Ruta que incluye el parámetro `id`
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }