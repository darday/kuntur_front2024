import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-cronograma-without-img',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './cronograma-without-img.component.html',
  styleUrl: './cronograma-without-img.component.css'
})
export class CronogramaWithoutImgComponent {
  days = [
    { label: 'VIE 1', content: 'Pronto Tendremos más información' },
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
}
