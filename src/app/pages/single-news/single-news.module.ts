import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleNewsRoutingModule } from './single-news-routing.module';
import { CronogramaComponent } from '../../components/cronograma/cronograma.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SingleNewsRoutingModule,
    CronogramaComponent
  ]
})
export class SingleNewsModule { }
