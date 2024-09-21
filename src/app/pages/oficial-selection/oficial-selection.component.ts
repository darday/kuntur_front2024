import { Component } from '@angular/core';
import { CronogramaComponent } from '../../components/cronograma/cronograma.component';
import { CortometrajesComponent } from './cortometrajes/cortometrajes.component';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';
import { PatrocinadoresComponent } from '../../components/patrocinadores/patrocinadores.component';

@Component({
  selector: 'app-oficial-selection',
  standalone: true,
  imports: [CronogramaComponent, CortometrajesComponent,SuscriptionComponent,PatrocinadoresComponent],
  templateUrl: './oficial-selection.component.html',
  styleUrl: './oficial-selection.component.css'
})
export class OficialSelectionComponent {

}
