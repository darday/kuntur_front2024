import { Component, OnInit } from '@angular/core';
import { CronogramaComponent } from '../../components/cronograma/cronograma.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';  // Importa el Router para manejar la navegación
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClientModule
import { PatrocinadoresComponent } from '../../components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';
import { ButtonsForFilmsComponent } from '../../components/buttons-for-films/buttons-for-films.component';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common'; // Para *ngFor y otras directivas comunes
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-corto-univ-ficcion',
  standalone: true,
  imports: [
    CronogramaComponent,
    MatButtonModule,
    MatIconModule,
    PatrocinadoresComponent,
    SuscriptionComponent,
    ButtonsForFilmsComponent,
    CronogramaWithoutImgComponent,
    CommonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './corto-univ-ficcion.component.html',
  styleUrl: './corto-univ-ficcion.component.css'
})
export class CortoUnivFiccionComponent {
  // Inicialmente el array de films está vacío
  films: { id: number, image: string, films_Titulo: string, films_Director: string }[] = [];

  isLoading = true;  // Variable para rastrear el estado de carga

  constructor(private http: HttpClient, private router: Router) { }

  // Llamamos a getData() cuando se inicializa el componente
  ngOnInit() {
    this.getData();
  }

  getData() {
    const url = `${environment.apiUrl}/list_cortodoc`;
    const apiUrlStorage = `${environment.apiUrlStorage}`;

    // Realizamos la solicitud al endpoint
    this.http.get<any[]>(url).subscribe(response => {
      // Mapeamos la respuesta a la estructura necesaria para las films
      this.films = response.map(item => ({
        id: item.id,
        image: `${apiUrlStorage}/${item.films_imagen}`,
        films_Titulo: item.film_Titulo,
        films_Director: item.film_Director
      }));
      this.isLoading = false; // Desactivar el estado de carga cuando los datos estén disponibles

      console.log(this.films); // Para verificar la estructura de las tarjetas
    }, error => {
      console.error('Error:', error);
      this.isLoading = false; // Desactivar el estado de carga cuando los datos estén disponibles

    });
  }
}
