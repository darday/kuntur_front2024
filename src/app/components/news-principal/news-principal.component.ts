import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; // Para *ngFor y otras directivas comunes
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-principal',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './news-principal.component.html',
  styleUrl: './news-principal.component.css'
})
export class NewsPrincipalComponent implements OnInit {
  // Inicialmente el array de cards está vacío
  cards: { image: string, content: string }[] = [];

  constructor(private http: HttpClient) { }

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
        image: `${apiUrlStorage}/${item.Not_imagen}`, // Ajusta la ruta de la imagen concatenando la URL base con el nombre de la imagen
        content: `${item.Not_Titulo} - ${item.Not_Descripcion}`
      }));

      console.log(this.cards); // Para verificar la estructura de las tarjetas
    }, error => {
      console.error('Error:', error);
    });
  }
}
