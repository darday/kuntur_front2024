import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClientModule
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { Router } from '@angular/router';  // Importa el Router para manejar la navegación


import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  videoUrl: SafeResourceUrl | undefined;  // Variable para almacenar la URL segura del video
  showVideo = false




  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private sanitizer: DomSanitizer) { }

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
        if (this.newsData.Not_ImgDesc) {
          this.videoUrl = this.getSafeUrl(`https://www.youtube.com/embed/${this.newsData.Not_ImgDesc}`);
        }
        if(this.newsData.Not_Estado == 'Si'){
          this.showVideo = true
        }else{
          this.showVideo = false
        }
        console.log('Datos recibidos:', this.newsData);
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  navigateToDetail() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    });  // Redirige a la página de detalles con el ID en la URL

  }
}
