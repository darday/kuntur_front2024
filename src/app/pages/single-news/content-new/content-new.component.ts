import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClientModule
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { Router } from '@angular/router';  // Importa el Router para manejar la navegación


import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-content-new',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatIconModule, MatButtonModule,MatProgressSpinnerModule],
  templateUrl: './content-new.component.html',
  styleUrl: './content-new.component.css'
})
export class ContentNewComponent {
  id: string | null = null;
  newsData: any;
  environment = environment;
  isLoading = true;  // Variable para rastrear el estado de carga



  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.getNewsData(this.id);
      }
    });
  }

  getNewsData(id: string): void {

    const url = `${environment.apiUrl}/news-by-id/${id}`;
    const apiUrlStorage = `${environment.apiUrlStorage}`;

    this.http.get(url).subscribe(
      (data) => {
        this.newsData = data;
        this.isLoading = false; // Desactivar el estado de carga cuando los datos estén disponibles
        console.log('Datos recibidos***:', this.newsData[0]);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  navigateToDetail() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });  // Redirige a la página de detalles con el ID en la URL

  }
}
