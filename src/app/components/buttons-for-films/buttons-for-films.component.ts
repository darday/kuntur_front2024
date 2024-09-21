import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-for-films',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './buttons-for-films.component.html',
  styleUrl: './buttons-for-films.component.css'
})
export class ButtonsForFilmsComponent {

}
