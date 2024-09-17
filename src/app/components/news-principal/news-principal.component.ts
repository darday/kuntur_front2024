import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; // Para *ngFor y otras directivas comunes
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  // Importa el Router para manejar la navegación


@Component({
  selector: 'app-news-principal',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './news-principal.component.html',
  styleUrl: './news-principal.component.css'
})
export class NewsPrincipalComponent implements OnInit {
  // Inicialmente el array de cards está vacío
  cards: { id: number, image: string, content: string }[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  // Llamamos a getData() cuando se inicializa el componente
  ngOnInit() {
    this.getData();
  }

  getData() {
    const url = `${environment.apiUrl}/news-list`;
    const apiUrlStorage = `${environment.apiUrlStorage}`;

    // Realizamos la solicitud al endpoint
    this.http.get<any[]>(url).subscribe(response => {
      // Mapeamos la respuesta a la estructura necesaria para las cards
      this.cards = response.map(item => ({
        id: item.id,  // Agrega el id de la noticia
        image: `${apiUrlStorage}/${item.Not_imagen}`, // Ajusta la ruta de la imagen concatenando la URL base con el nombre de la imagen
        content: `${item.Not_Titulo} - ${item.Not_Descripcion} - ${item.id}`
      }));

      console.log(this.cards); // Para verificar la estructura de las tarjetas
    }, error => {
      console.error('Error:', error);
    });
  }

  // Función que se encargará de la navegación
  navigateToDetail(cardId: number) {
    if (cardId) {
      this.router.navigate(['/single-news', cardId]);  // Redirige a la página de detalles con el ID en la URL
    } else {
      console.error('El ID de la tarjeta es inválido:', cardId);
    }
  }


}
