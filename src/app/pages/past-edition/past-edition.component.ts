import { Component, NgModule } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFabButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PatrocinadoresComponent } from '../../components/patrocinadores/patrocinadores.component';
import { SuscriptionComponent } from '../../components/suscription/suscription.component';

@Component({
  selector: 'app-past-edition',
  standalone: true,
  imports: [CronogramaWithoutImgComponent, HttpClientModule, CommonModule,
    PatrocinadoresComponent,
    SuscriptionComponent
  ],
  templateUrl: './past-edition.component.html',
  styleUrl: './past-edition.component.css'
})
export class PastEditionComponent {

  

  // Definimos los años que serán los botones
  years: string[] = ['2017','2018', '2019', '2020', '2021', '2022', '2023', '2024'];

  // Contenidos correspondientes a cada año
  contents = [
    { year: '2017', image: 'assets/editions/2017.jpg', text: 'El cartel del VI Festival de Cine Kunturñawi 2017 presenta una ilustración central de un cóndor antropomorfizado, símbolo de la cosmovisión andina. La figura destaca por sus alas extendidas y una vestimenta tradicional roja con detalles étnicos, reflejando la fusión entre la identidad cultural y la narrativa visual. Al fondo, trazos en blanco y negro acompañan a un grupo de cóndores en vuelo, sugiriendo libertad y comunidad. Los nombres de las provincias anfitrionas (Chimborazo, Tungurahua y Bolívar) aparecen junto a una claqueta de cine, vinculando la imagen a la temática cinematográfica del festival.' },
    { year: '2018', image: 'assets/editions/2018.jpg', text: 'El cartel del VII Festival de Cine Kunturñawi 2018 muestra un personaje con elementos de cóndor, detrás de una cámara de cine, simbolizando la temática El Ojo del Cóndor. El fondo geométrico y colorido aporta un estilo moderno y dinámico. Se destacan las fechas de las sedes (Bolívar, Pastaza, Tungurahua y Chimborazo) y las categorías en competencia, enfocadas en ficción, documental, animación y cortometrajes universitarios. El diseño combina tradición y creatividad, invitando a participar en un festival que celebra la identidad visual andina.' },
    { year: '2019', image: 'assets/editions/2019.jpg', text: 'El cartel del VIII Festival de Cine Kunturñawi 2019 destaca una ilustración vibrante de un cóndor estilizado, compuesto por patrones coloridos que evocan la diversidad cultural andina. El lema "El Ojo del Cóndor" se integra visualmente, simbolizando la mirada introspectiva y artística del festival. Con un fondo en tonos cálidos, se presentan las sedes: Bolívar, Tungurahua, Pastaza y Chimborazo, junto con un congreso enfocado en “Cine y Patrimonio” para explorar la memoria e identidad del Ecuador. El diseño combina arte y cine, invitando a una reflexión profunda sobre la cultura y el patrimonio visual.' },
    { year: '2020', image: 'assets/editions/2020.jpg', text: 'El cartel del IX Festival de Cine Ecuatoriano Kunturñawi 2020 se destaca por anunciar su modalidad online, adaptándose a los tiempos actuales. La ilustración central presenta a una mujer joven con un ala de cóndor extendida sobre su hombro, simbolizando protección y sabiduría. Sostiene una claqueta de cine, enfatizando el enfoque cinematográfico y cultural del festival. En tonos cálidos y con detalles de plumas, el diseño menciona las fechas de las sedes virtuales (Bolívar, Tungurahua, Cotopaxi, Pastaza y Chimborazo) y la inauguración transmitida en vivo por Facebook. Este cartel resalta la continuidad del festival en formato digital, preservando su misión de promover la identidad ecuatoriana.' },
    { year: '2021', image: 'assets/editions/2021.jpg', text: 'El cartel del X Festival de Cine Ecuatoriano Kunturñawi 2021 destaca un diseño en tonos cálidos y dorados, evocando la riqueza cultural andina. La imagen presenta a un cóndor sosteniendo con su pico una gran manta amarilla, donde se resalta el nombre del festival y el lema "El Ojo del Cóndor". En el extremo izquierdo, una mujer mira hacia el horizonte, simbolizando la conexión entre tradición y cine. El cartel detalla las fechas y sedes provinciales (Cotopaxi, Bolívar, Tungurahua, Pastaza y Chimborazo) y las categorías en competencia, que abarcan largometrajes, cortometrajes y documentales. El diseño celebra la décima edición del festival, reafirmando su compromiso con la promoción del cine y la identidad ecuatoriana.' },
    { year: '2022', image: 'assets/editions/2022.jpg', text: 'El cartel del Festival de Cine Ecuatoriano Kunturñawi 2022 muestra una ilustración elegante y vibrante. La protagonista es una mujer que porta un casco de cóndor, simbolizando la identidad del festival, “El Ojo del Cóndor”. La figura sostiene una claqueta de cine, reflejando el enfoque cinematográfico. Los tonos morados y rosados aportan modernidad y distinción. En el diseño se destacan las fechas del evento, del 5 al 12 de noviembre, y las categorías de largometrajes (ficción y documental) y cortometrajes (incluyendo categorías internacionales y rurales). Las sedes principales del festival son Cotopaxi, Bolívar, Tungurahua y Chimborazo, consolidando el festival como un espacio de cine y cultura ecuatoriana.' },
    { year: '2023', image: 'assets/editions/2023.jpg', text: 'El cartel del XII Festival de Cine Ecuatoriano Kunturñawi 2023 presenta una ilustración vibrante con un cóndor, símbolo del festival, volando hacia un sol radiante que destaca en el fondo. El ala del cóndor se extiende como una cinta de película, mostrando rostros estilizados que representan la diversidad cultural de Ecuador. El diseño resalta las fechas, del 6 al 28 de noviembre, y menciona las sedes: Bolívar, Cotopaxi, Tungurahua, Chimborazo y Pastaza. Las categorías incluyen largometrajes de ficción y documental, así como cortometrajes en distintas secciones, como internacional, comunitario y universitario. Este cartel transmite la esencia de un festival que celebra la riqueza cultural y cinematográfica del país.' },
    { year: '2024', image: 'assets/editions/2024.jpg', text: 'El cartel del XIII Festival de Cine Ecuatoriano Kunturñawi 2024 celebra los “100 años de cine en Ecuador”. La ilustración presenta a un personaje ancestral, vestido con un manto de plumas de cóndor, que sostiene un bastón decorado y vierte simbolismos cinematográficos y culturales desde un caldero, sugiriendo la mezcla de historia y arte. Sobre él, una cinta de película ondeante lleva el lema central de esta edición. El fondo en tonos suaves transmite una atmósfera mística, destacando la fecha del 30 de octubre al 29 de noviembre. Este diseño honra el centenario del cine ecuatoriano, conectando la tradición con la evolución de la cinematografía nacional.' },
  ];

  // Índice seleccionado inicialmente (por ejemplo, 2019)
  selectedIndex = 7; // Muestra el año 2019 por defecto

  // Contenido seleccionado por defecto
  selectedContent = this.contents[this.selectedIndex];

  // Método para seleccionar el año y actualizar el contenido
  selectYear(index: number) {
    this.selectedIndex = index;
    this.selectedContent = this.contents[this.selectedIndex];
  }
}
