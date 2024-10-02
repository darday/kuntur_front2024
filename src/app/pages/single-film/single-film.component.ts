import { Component } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';

@Component({
  selector: 'app-single-film',
  standalone: true,
  imports: [CronogramaWithoutImgComponent, MatProgressSpinnerModule,CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    SuscriptionComponent
  ],
  templateUrl: './single-film.component.html',
  styleUrl: './single-film.component.css'
})
export class SingleFilmComponent {

  id: string | null = null;
  FilmData: any;
  environment = environment;
  isLoading = true;  // Variable para rastrear el estado de carga

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.getFilmData(this.id);
      }
    });
  }

  getFilmData(id: string): void {

    const url = `${environment.apiUrl}/list_film_by_id/${id}`;
    const apiUrlStorage = `${environment.apiUrlStorage}`;

    this.http.get(url).subscribe(
      (data: any) => {
        this.FilmData = data[0];
        this.isLoading = false; // Desactivar el estado de carga cuando los datos estén disponibles
        console.log('Datos recibidos***:', data);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
