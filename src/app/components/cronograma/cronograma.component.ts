import { Component, OnInit,signal } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClientModule

import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { environment } from '../../environments/environment';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-cronograma',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTabsModule, CommonModule,MatButtonModule,MatIconModule,MatTableModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './cronograma.component.html',
  styleUrl: './cronograma.component.css'
})

export class CronogramaComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  isLoading = true;  // Variable para rastrear el estado de carga

  dates: { id: number, fecha: string }[] = [];  // Inicializado con un array vacío
  activities: { 
    id_activities:number | any,
    hora: string, 
    descripcion: string,
    provincia: string,
    lugar:string 
  
  }[] = [];  // Inicializado con un array vacío
  readonly panelOpenState = signal(false);



  ngOnInit() {
    // Obtener la URL actual al iniciar el componente
    const currentUrl = this.router.url;
    // console.log('URL en ngOnInit:', currentUrl); // Esto debería imprimir la URL actual al cargar el componente

    // Aplicar lógica en función de la URL actual
    this.updateImageBasedOnUrl(currentUrl);

    // Ahora nos suscribimos a los futuros eventos de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // console.log('NavigationEnd event:', event); // Esto debería imprimirse cuando ocurra una nueva navegación
      const newUrl = this.router.url;
      // console.log('URL después de la navegación:', newUrl);
      this.updateImageBasedOnUrl(newUrl);
    });

    window.addEventListener('resize', () => {
      this.updateImageBasedOnUrl(this.router.url); // Volvemos a llamar la función en cada redimensionamiento
    });

    this.getData();

  }


  getData() {
    const url = `${environment.apiUrl}/listdate`;
    const apiUrlStorage = `${environment.apiUrlStorage}`;

    // Realizamos la solicitud al endpoint
    this.http.get<any[]>(url).subscribe(response => {
      // console.log(response)
      // Mapeamos la respuesta a la estructura necesaria para las dates
      this.dates = response.map(item => ({
        id: item.id,
        fecha: item.descripcion || 'Fecha no disponible'
      }));
      this.isLoading = false; // Desactivar el estado de carga cuando los datos estén disponibles

      console.log(this.dates); // Para verificar la estructura de las tarjetas
    }, error => {
      console.error('Error:', error);
      this.isLoading = false; // Desactivar el estado de carga cuando los datos estén disponibles

    });
  }

  ListAcivities(id: number | any): void {
    console.log("Clic en la fecha con ID:", id);
    const url = `${environment.apiUrl}/list_activity/${id}`;  // Ajusta la URL según tu API

    // Realizar la solicitud HTTP para obtener las actividades
    this.http.get<any[]>(url).subscribe(
      (response) => {
        this.activities = response;  // Suponiendo que la API devuelve una lista de actividades
        this.isLoading = false; 
        console.log("Clic en la fecha con ID:", this.activities);

      },
      (error) => {
        console.error('Error al obtener las actividades:', error);
      }
    );
  }

  onTabChange(event: any): void {
    this.isLoading = true; 

    const selectedIndex = event.index;
    if (selectedIndex > 0) {  // Evitar la primera pestaña si no es dinámica
      const selectedDate = this.dates[selectedIndex - 1]; // Restamos 1 si la primera pestaña es estática
      if (selectedDate) {
        this.ListAcivities(selectedDate.id);
      }
    }
  }

  listFilForActivity(id:number){
    console.log("Clic"+id);
  }

  currentImage: string = 'assets/carousel/1.png'; // Imagen por defecto para la ruta '/'


  updateImageBasedOnUrl(url: string) {
    const isSmallScreen = window.innerWidth < 768;
    if (url === '/' || url.startsWith('/home')) {
      this.currentImage = isSmallScreen
        ? 'assets/carousel/celu/PORTADA-PRINCIPAL-CELU.png'
        : 'assets/carousel/PORTADA-PRINCIPAL.png';
    } else if (url.startsWith('/seleccion-oficial')) {
      this.currentImage = isSmallScreen
        ? 'assets/carousel/celu/portada-seleccion-oficial-celu.png'
        : 'assets/carousel/portada-seleccion-oficial.png';
    } else {
      // Asegúrate de que siempre haya un valor para currentImage
      this.currentImage = 'assets/carousel/default-image.png';  // Valor por defecto
    }
  }


}
