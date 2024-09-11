import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { NewsTittleComponent } from './components/news-tittle/news-tittle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,CronogramaComponent,NewsTittleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kuntur-front';
}
