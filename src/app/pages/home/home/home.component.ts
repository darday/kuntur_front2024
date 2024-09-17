import { Component } from '@angular/core';
import { CronogramaComponent } from '../../../components/cronograma/cronograma.component';
import { NewsTittleComponent } from '../../../components/news-tittle/news-tittle.component';
import { NewsPrincipalComponent } from '../../../components/news-principal/news-principal.component';
import { PatrocinadoresComponent } from '../../../components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from '../../../components/suscription/suscription.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CronogramaComponent, NewsTittleComponent, NewsPrincipalComponent,PatrocinadoresComponent,SuscriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
