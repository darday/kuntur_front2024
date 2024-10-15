import { Component } from '@angular/core';
import { CronogramaWithoutImgComponent } from '../../components/cronograma-without-img/cronograma-without-img.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-judges',
  standalone: true,
  imports: [CronogramaWithoutImgComponent,HttpClientModule,
    MatButtonModule,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle,
    SlicePipe
  ],
  templateUrl: './judges.component.html',
  styleUrl: './judges.component.css'
})
export class JudgesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(name: string, description: string): void {
    this.dialog.open(PersonDialogComponent, {
      data: {
        name,
        description
      }
    });
  }


}
