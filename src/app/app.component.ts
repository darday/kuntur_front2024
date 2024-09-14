import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { NewsTittleComponent } from './components/news-tittle/news-tittle.component';
import { NewsPrincipalComponent } from './components/news-principal/news-principal.component';
import { PatrocinadoresComponent } from './components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from './components/suscription/suscription.component';
import { HttpClientModule } from '@angular/common/http';

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
    SuscriptionComponent,
    HttpClientModule
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kuntur-front';
}
