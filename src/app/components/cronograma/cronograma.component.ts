import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

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
  imports: [MatTabsModule, CommonModule,MatExpansionModule,MatButtonModule,MatIconModule,MatTableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cronograma.component.html',
  styleUrl: './cronograma.component.css'
})

export class CronogramaComponent {


  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Peli', 'Director', 'Sinopsis','Enlace a Peli'];

  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;

  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource2 = ELEMENT_DATA2;
  readonly panelOpenState = signal(false);

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
  }

  updateImageBasedOnUrl(url: string) {
    if (url === '/' || url.startsWith('/home')) {
      this.currentImage = 'assets/carousel/1.png';
    } else if (url.startsWith('/seleccion-oficial')) {
      this.currentImage = 'assets/carousel/2.png';
    } else if (url.startsWith('/largometraje-ficcion')) {
      this.currentImage = 'assets/carousel/2.png';
    }
  }




}


export interface PeriodicElement2 {
  name: string;
  position: any;
  weight: any;
  symbol: any;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 'El extraño caso del hombre bala', name: 'Carlos Berenguer' , weight: 1.0079, symbol: 1},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},

];

export interface PeriodicElement {
  Peli: string;
  Director: string;
  Sinópsis: string;
  Enlace: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Peli: 'El extraño caso del hombre bala ',
    Director: 'Carlos Berenguer',
    Sinópsis: `Hydrogen is a chemical element with Sinópsis H and atomic number 1. With a standard atomic Director of 1.008, hydrogen is the lightest element on the periodic table.`,
    Enlace: 'http://123',
  },
  {
    Peli: 'El extraño caso del hombre bala ',
    Director: 'Carlos Berenguer',
    Sinópsis: `Hydrogen is a chemical element with Sinópsis H and atomic number 1. With a standard
        atomic Director of 1.008, hydrogen is the lightest element on the periodic table.`,
    Enlace: 'http://',
  },
  {
    Peli: 'El extraño caso del hombre bala ',
    Director: 'Carlos Berenguer',
    Sinópsis: `Hydrogen is a chemical element with Sinópsis H and atomic number 1. With a standard
        atomic Director of 1.008, hydrogen is the lightest element on the periodic table.`,
    Enlace: 'http://',
  },
];