import { Component } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, SlicePipe } from '@angular/common';
import { PatrocinadoresComponent } from '../../components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';

@Component({
  selector: 'app-judges',
  standalone: true,
  imports: [CronogramaWithoutImgComponent,HttpClientModule,
    MatButtonModule,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle,
    SlicePipe,
    PatrocinadoresComponent,
    SuscriptionComponent,
    CommonModule
  ],
  templateUrl: './judges.component.html',
  styleUrl: './judges.component.css'
})
export class JudgesComponent {
  constructor(public dialog: MatDialog) {}

  jurados = [
    { nombre: 'Agustina Comedi', imagen: 'assets/img/jurados/Agustina.jpg', descripcion: 'Agustina Comedi (1986, Argentina) estudió Literatura. En 2017 estrenó su ópera prima “El silencio es un cuerpo que cae” en IDFA. La película fue multipremiada y recorrió más de sesenta festivales internacionales. En 2019 escribió y dirigió Playback. Ensayo de una despedida, Mejor Cortometraje Nacional en el Festival Internacional de Cine de Mar del Plata y seleccionado en Berlinale Short Films Competition donde se alzó con el Teddy Award (2020). El cortometraje fue exhibido en más de 130 festivales internacionales entre los que se encuentran Jeonju IFF, Hot Docs, Melbourne IFF, New Films / New Directors y Vancouver IFF, entre otros.  Ambas películas fueron curadas por Nan Goldin en un programa especial para Metrograph NY y exhibidas en el Museo Reina Sofía y en Tabakalera San Sebastián. Agustina investiga los vínculos entre archivo, memoria y fabulación. Actualmente trabaja en su segundo y tercer largometraje.', },
    { nombre: 'Margherita Tórtora', imagen: 'assets/img/jurados/Margherita.jpg', descripcion: 'Festival de Cine Latino e Ibérico en Yale (LIFFY) / Universidad de Yale, New Haven, CT Margherita Tortora es una cinéfila de toda la vida. Incorporó películas en sus cursos de lengua española, literaturas y estudios latinoamericanos cuando comenzó a enseñar a principios de los años 80. En Yale, ha estado impartiendo un curso sobre cine latinoamericano y dirigiendo una serie de cine que cuenta con la visita de cineastas para el Consejo de Estudios Latinoamericanos e Ibéricos en el Centro MacMillan durante los últimos 30 años. Fue cofundadora del Festival de Cine Iberoamericano de Nueva Inglaterra, una organización sin fines de lucro, que se llevó a cabo desde 2010 hasta 2014. En 2015, fundó el Festival de Cine Latino e Ibérico en Yale (LIFFY), y se está preparando para presentar la décima edición de este festival en noviembre. También ha dado conferencias sobre cine, ha publicado artículos en varias revistas y ha reseñado libros sobre cine para editoriales. Hizo la curaduría para la primera muestra de Cine Dominicano en Medellín, Colombia con el realizador Víctor Gaviria y ha sido jurado para muchos festivales de cine', },
    { nombre: 'César Galindo', imagen: 'assets/img/jurados/Cesar1.jpeg', descripcion: 'Nacido en el Callao. Titulo de Arquitecto en el Perú. Doctor en Urbanismo en París. Estudios de cine en París. Radica entre el Peru y Suecia. Filmografía: 2021 ”KILLAPA WAWAN”. Gana el concurso de DAFO a la producción; “WILLAQ PIRQA” Largometraje. 80 min, gana en el Festival internacional de Lima: el PREMIO DEL PUBLICO : Mejor pelicula y PREMIO DEL JURADO: Mejor pelicula peruana,  PREMIO COMUNIDAD PUCP: Mejor pelicula hecho en el Perú, 2023 Premios APRECI 2022 (Asociacion de prensa cinematografica ): Mejor película de ficción, Mejor dirección, Mejor guion, Mejor actor principal, y Mejor actriz de reparto.', },
    { nombre: 'Antoni Grañana', imagen: 'assets/img/jurados/Antoni.jpg', descripcion: '(Amposta, 2000) ha estudiado Realización Audiovisual y Humanidades. Desde 2020 ha participado en numerosos cortos y videoclips como director, editor y guionista. Su último corto La invasió dels ultra-arrosos ha tenido la oportunidad de exhibirse en festivales como MonFilmat e In-FCTA. Actualmente se encuentra en plena postproducción de su siguiente film, Los nens de la Ribera un documental que sigue la línea de revalorizar el potencial cinematográfico del Delta del Ebro, donde Antoni nació y crio. A su vez sigue trabajando en la dirección de videoclips, donde se puede encontrar su sello autoral, aun trabajando para diferentes artistas y diferentes registros musicales. ', },
    { nombre: 'Galo Vásconez', imagen: 'assets/img/jurados/Galo.jpg', descripcion: 'Docente de la carrera de Comunicación de la Universidad de Chimborazo, en la ciudad de Riobamba-Ecuador. Doctor en Comunicación Audiovisual, Publicidad y Relaciones Públicas por la Universidad Complutense de Madrid. Magister en Comunicación Audiovisual por la Universidad Católica Argentina y Máster en Creación de guiones audiovisuales por la Universidad Internacional de La Rioja. Licenciado en Comunicación Social, con mención en producción de televisión. Productor audiovisual orientado al documental. Investigador en temas de cine, sobre todo sobre comedia negra, ciencia ficción y posmodernidad. Tiene varios artículos científicos publicados en revistas latinoamericanas de comunicación y capítulos de libros editados.', },
  ];

  openDialog(name: string, description: string): void {
    this.dialog.open(PersonDialogComponent, {
      data: {
        name,
        description
      }
    });
  }


}
