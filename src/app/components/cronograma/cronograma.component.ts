import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './cronograma.component.html',
  styleUrl: './cronograma.component.css'
})

export class CronogramaComponent implements OnInit {
  days = [
    { label: 'VIE 11', content: 'Pronto Tendremos más información' },
    { label: 'SAB 2', content: 'Pronto Tendremos más información' },
    { label: 'DOM 3', content: 'Pronto Tendremos más información' },
    { label: 'LUN 4', content: 'Pronto Tendremos más información' },
    { label: 'MAR 5', content: 'Pronto Tendremos más información' },
    { label: 'MIE 6', content: 'Pronto Tendremos más información' },
    { label: 'JUE 7', content: 'Pronto Tendremos más información' },
    { label: 'VIE 8', content: 'Pronto Tendremos más información' },
    { label: 'SAB 9', content: 'Pronto Tendremos más información' },
    { label: 'DOM 10', content: 'Pronto Tendremos más información' },
    { label: 'LUN 11', content: 'Pronto Tendremos más información' },
    { label: 'MAR 12', content: 'Pronto Tendremos más información' },
    { label: 'MIE 13', content: 'Pronto Tendremos más información' },
    { label: 'JUE 14', content: 'Pronto Tendremos más información' },
    { label: 'VIE 15', content: 'Pronto Tendremos más información' },
    { label: 'SAB 16', content: 'Pronto Tendremos más información' },
    { label: 'DOM 17', content: 'Pronto Tendremos más información' },
    { label: 'LUN 18', content: 'Pronto Tendremos más información' },
    { label: 'MAR 19', content: 'Pronto Tendremos más información' },
    { label: 'MIE 20', content: 'Pronto Tendremos más información' },
    { label: 'JUE 21', content: 'Pronto Tendremos más información' },
    { label: 'VIE 22', content: 'Pronto Tendremos más información' },
    { label: 'SAB 23', content: 'Pronto Tendremos más información' },
    { label: 'DOM 24', content: 'Pronto Tendremos más información' },
    { label: 'LUN 25', content: 'Pronto Tendremos más información' },
    { label: 'MAR 26', content: 'Pronto Tendremos más información' },
    { label: 'MIE 27', content: 'Pronto Tendremos más información' },
    { label: 'JUE 28', content: 'Pronto Tendremos más información' },
    { label: 'VIE 29', content: 'Pronto Tendremos más información' },
    { label: 'SAB 30', content: 'Pronto Tendremos más información' },


    // Añade más días con contenido según sea necesario
  ];

  currentImage: string = 'assets/carousel/1.png'; // Imagen por defecto para la ruta '/'

  constructor(private router: Router) { }

  ngOnInit() {
    // Obtener la URL actual al iniciar el componente
    const currentUrl = this.router.url;
    console.log('URL en ngOnInit:', currentUrl); // Esto debería imprimir la URL actual al cargar el componente

    // Aplicar lógica en función de la URL actual
    this.updateImageBasedOnUrl(currentUrl);

    // Ahora nos suscribimos a los futuros eventos de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('NavigationEnd event:', event); // Esto debería imprimirse cuando ocurra una nueva navegación
      const newUrl = this.router.url;
      console.log('URL después de la navegación:', newUrl);
      this.updateImageBasedOnUrl(newUrl);
    });

    window.addEventListener('resize', () => {
      this.updateImageBasedOnUrl(this.router.url); // Volvemos a llamar la función en cada redimensionamiento
    });
  }

  updateImageBasedOnUrl(url: string) {
    const isSmallScreen = window.innerWidth < 768; // Pantallas menores a 768px son consideradas pequeñas
    console.log(isSmallScreen)
    if (url === '/' || url.startsWith('/home')) {
      if (isSmallScreen) {
        this.currentImage = 'assets/carousel/celu/PORTADA-PRINCIPAL-CELU.png';
      } else {
        this.currentImage = 'assets/carousel/PORTADA-PRINCIPAL.png';
      }
    } else if (url.startsWith('/seleccion-oficial')) {
      if (isSmallScreen) {
        this.currentImage = 'assets/carousel/celu/portada-seleccion-oficial-celu.png';
      } else {
        this.currentImage = 'assets/carousel/portada-seleccion-oficial.png';
      }
    } 
  }


}
