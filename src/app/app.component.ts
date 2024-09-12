import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { NewsTittleComponent } from './components/news-tittle/news-tittle.component';
import { NewsPrincipalComponent } from './news-principal/news-principal.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from './suscription/suscription.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    CronogramaComponent,
    NewsTittleComponent,
    NewsPrincipalComponent,
    PatrocinadoresComponent,
    SuscriptionComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kuntur-front';
}
