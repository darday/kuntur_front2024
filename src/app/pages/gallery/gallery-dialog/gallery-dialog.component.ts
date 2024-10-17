import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-dialog',
  standalone: true,
  imports: [],
  templateUrl: './gallery-dialog.component.html',
  styleUrl: './gallery-dialog.component.css'
})
export class GalleryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { images: { image: string }[], currentIndex: number }
  ) { }

  nextImage() {
    if (this.data.currentIndex < this.data.images.length - 1) {
      this.data.currentIndex++;
    } else {
      this.data.currentIndex = 0; // Volver al principio
    }
  }

  prevImage() {
    if (this.data.currentIndex > 0) {
      this.data.currentIndex--;
    } else {
      this.data.currentIndex = this.data.images.length - 1; // Volver al final
    }
  }

}
