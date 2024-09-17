import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild([{
      path: '', component: HomeComponent
    }])
  ]
})
export class HomeModule { }
