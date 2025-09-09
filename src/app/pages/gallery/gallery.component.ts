import { Component } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CronogramaWithoutImgComponent,HttpClientModule,
    MatDialogModule,
    CommonModule

  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {



  constructor(public dialog: MatDialog,private http: HttpClient, private router: Router) {}

  isLoading = true;  // Variable para rastrear el estado de carga

  images: { image: string }[] = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    const url = `${environment.apiUrl}/list_gallery`;
    const apiUrlStorage = `${environment.apiUrlStorageGalery}`;
    console.log("****************");
    console.log(apiUrlStorage);

    // Realizamos la solicitud al endpoint
    this.http.get<any[]>(url).subscribe(response => {
      // Mapeamos la respuesta a la estructura necesaria para las films
      this.images = response.map(item => ({
        id: item.id,
        image: `${apiUrlStorage}/${item.Foto}`,
      }));
      this.isLoading = false; // Desactivar el estado de carga cuando los datos estén disponibles

      console.log(this.images); // Para verificar la estructura de las tarjetas
    }, error => {
      console.error('Error:', error);
      this.isLoading = false; // Desactivar el estado de carga cuando los datos estén disponibles

    });
  }

  openDialog(index: number) {
    this.dialog.open(GalleryDialogComponent, {
      data: {
        images: this.images,
        currentIndex: index
      }
    });
  }

}
