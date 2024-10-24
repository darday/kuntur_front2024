import { Component } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CronogramaWithoutImgComponent,HttpClientModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
