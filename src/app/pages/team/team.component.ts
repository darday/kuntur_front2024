import { Component } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';
import { PatrocinadoresComponent } from '../../components/patrocinadores/patrocinadores.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CronogramaWithoutImgComponent,HttpClientModule,SuscriptionComponent,PatrocinadoresComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
