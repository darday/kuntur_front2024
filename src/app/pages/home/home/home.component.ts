import { Component } from '@angular/core';
import { CronogramaComponent } from '../../../components/cronograma/cronograma.component';
import { NewsTittleComponent } from '../../../components/news-tittle/news-tittle.component';
import { NewsPrincipalComponent } from '../../../components/news-principal/news-principal.component';
import { PatrocinadoresComponent } from '../../../components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from '../../../components/suscription/suscription.component';
import { ButtonsForDownloadComponent } from '../../../components/buttons-for-download/buttons-for-download.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CronogramaComponent, 
    NewsTittleComponent, 
    NewsPrincipalComponent,
    PatrocinadoresComponent,
    SuscriptionComponent,
    ButtonsForDownloadComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
