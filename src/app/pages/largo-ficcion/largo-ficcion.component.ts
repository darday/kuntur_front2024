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
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common'; // Para *ngFor y otras directivas comunes
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@Component({
  selector: 'app-largo-ficcion',
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
  templateUrl: './largo-ficcion.component.html',
  styleUrl: './largo-ficcion.component.css'
})
export class LargoFiccionComponent {

  // Inicialmente el array de films está vacío
  films: { id: number, image: string, films_Titulo: string, films_Director: string }[] = [];
  environment = environment;

  isLoading = true;  // Variable para rastrear el estado de carga

  constructor(private http: HttpClient, private router: Router) { }

  // Llamamos a getData() cuando se inicializa el componente
  ngOnInit() {
    this.getData();
  }

  getData() {
    const url = `${environment.apiUrl}/list_larfic`;
    const apiUrlStorage = `${environment.apiUrlStorage}`;

    // Realizamos la solicitud al endpoint
    this.http.get<any[]>(url).subscribe(response => {
      // Mapeamos la respuesta a la estructura necesaria para las films
      this.films = response.map(item => ({
        id: item.id,
        image: `${apiUrlStorage}/${item.film_imagen}`,
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

  // constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }


  // navigateToSelectionOficial() {
  //   this.router.navigate(['/']).then(() => {
  //     window.scrollTo(0, 0);
  //   });  // Redirige a la página de detalles con el ID en la URL

  // }

  navigateToFilm(cardId: number) {
    console.log("Prueba"+cardId);
    if (cardId) {
      this.router.navigate(['/single-film', cardId]).then(() => {
        window.scrollTo(0, 0);
      });  // Redirige a la página de detalles con el ID en la URL
    } else {
      console.error('El ID de la tarjeta es inválido:', cardId);
    }
  }

}
