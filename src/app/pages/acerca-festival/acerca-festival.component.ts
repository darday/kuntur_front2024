import { Component } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClientModule
import { PatrocinadoresComponent } from '../../components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';
import { CronogramaComponent } from '../../components/cronograma/cronograma.component';


@Component({
  selector: 'app-acerca-festival',
  standalone: true,
  imports: [
    CronogramaWithoutImgComponent,
    PatrocinadoresComponent,
    SuscriptionComponent,
    CronogramaComponent
  ],
  templateUrl: './acerca-festival.component.html',
  styleUrl: './acerca-festival.component.css'
})
export class AcercaFestivalComponent {

}
