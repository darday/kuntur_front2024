import { Component } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';

@Component({
  selector: 'app-judges',
  standalone: true,
  imports: [CronogramaWithoutImgComponent],
  templateUrl: './judges.component.html',
  styleUrl: './judges.component.css'
})
export class JudgesComponent {

}
