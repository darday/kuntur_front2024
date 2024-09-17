import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-news',
  standalone: true,
  imports: [],
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
