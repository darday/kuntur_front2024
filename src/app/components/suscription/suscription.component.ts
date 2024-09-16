import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';  // Solo necesitas MatSnackBar
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-suscription',
  standalone: true,
  imports: [MatButton, HttpClientModule, FormsModule, MatProgressBarModule, CommonModule, MatFormFieldModule],
  templateUrl: './suscription.component.html',
  styleUrls: ['./suscription.component.css'] // La propiedad correcta es styleUrls
})
export class SuscriptionComponent {

  name: string = '';
  email: string = '';
  loading: boolean = false;  // Variable para el estado de carga

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }  // Inyectar MatSnackBar aquí

  onSubmit(form: NgForm) {

    // Si el formulario no es válido, mostrar los errores y detener la solicitud
    if (form.invalid) {
      return;
    }

    const subscriptionData = {
      name: this.name,
      email: this.email
    };

    const url = `${environment.apiUrl}/send-email`;
    this.loading = true; // Mostrar la barra de carga


    // Hacer la solicitud HTTP POST
    this.http.post(url, subscriptionData).subscribe(
      (response) => {
        console.log('Suscripción exitosa', response);
        this.loading = false;  // Ocultar la barra de carga
        this.snackBar.open('Suscripción exitosa', 'Cerrar', {
          duration: 5000, // Mostrar el mensaje por 3 segundos
        });
        // Limpiar el formulario después de un envío exitoso
        form.resetForm(); // Esto limpia tanto los valores como el estado del formulario (touched, submitted)
        this.name = '';
        this.email = '';
      },
      (error) => {
        this.loading = false;  // Ocultar la barra de carga
        this.snackBar.open('Error al suscribirse', 'Cerrar', {
          duration: 5000, // Mostrar el mensaje por 3 segundos
        });
        console.error('Error al suscribirse', error);
      }
    );
  }
}
