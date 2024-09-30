import { Component } from '@angular/core';
import { CronogramaComponent } from '../../components/cronograma/cronograma.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';  // Importa el Router para manejar la navegación
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClientModule
import { PatrocinadoresComponent } from '../../components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';
import { ButtonsForFilmsComponent } from '../../components/buttons-for-films/buttons-for-films.component';



@Component({
  selector: 'app-largo-ficcion',
  standalone: true,
  imports: [
    CronogramaComponent, 
    MatButtonModule, 
    MatIconModule,
    PatrocinadoresComponent,
    SuscriptionComponent,
    ButtonsForFilmsComponent
  
  ],
  templateUrl: './largo-ficcion.component.html',
  styleUrl: './largo-ficcion.component.css'
})
export class LargoFiccionComponent {

  // constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }


  // navigateToSelectionOficial() {
  //   this.router.navigate(['/']).then(() => {
  //     window.scrollTo(0, 0);
  //   });  // Redirige a la página de detalles con el ID en la URL

  // }
}
