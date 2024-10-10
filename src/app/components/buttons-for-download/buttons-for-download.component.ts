import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons-for-download',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './buttons-for-download.component.html',
  styleUrl: './buttons-for-download.component.css'
})
export class ButtonsForDownloadComponent {
  downloadPDF(pdfName: string) {
    const link = document.createElement('a');
    link.href = `assets/pdf/${pdfName}.pdf`;
    link.download = `${pdfName}.pdf`;
    link.click();
  }

}
