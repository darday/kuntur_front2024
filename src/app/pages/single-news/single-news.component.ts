import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CronogramaComponent } from '../../components/cronograma/cronograma.component';
import { ContentNewComponent } from './content-new/content-new.component';
import { ReadTooComponent } from './read-too/read-too.component';
import { NewsPrincipalComponent } from '../../components/news-principal/news-principal.component';
import { PatrocinadoresComponent } from '../../components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';


@Component({
  selector: 'app-single-news',
  standalone: true,
  imports: [CronogramaComponent,ContentNewComponent,ReadTooComponent,NewsPrincipalComponent,PatrocinadoresComponent,SuscriptionComponent],
  templateUrl: './single-news.component.html',
  styleUrl: './single-news.component.css'
})
export class SingleNewsComponent {

  newsId: string | null = null;  // Aquí se almacenará el ID de la noticia

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Capturamos el ID desde la URL
    this.newsId = this.route.snapshot.paramMap.get('id');

    // Puedes usar este ID para hacer otra petición HTTP si necesitas cargar la información de la noticia
    console.log('ID de la noticia:', this.newsId);
  }
}
