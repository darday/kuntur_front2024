import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatSlideToggleModule, MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menuOpen = false;
  submenuOpen = false; // Controla el submenú de "EL FESTIVAL"
  festivalSubMenuOpen = false; // Controla el submenú en pantallas pequeñas



  activeRoute = '/'; // Ruta inicial marcada por defecto
  constructor(private router: Router) { }

  ngOnInit() {
    // Suscribirse a los eventos de navegación para detectar la ruta activa
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isRouteActive(route: string): boolean {
    return this.activeRoute === route;
  }

  openSubmenu() {
    this.submenuOpen = true;
  }

  closeSubmenu() {
    this.submenuOpen = false;
  }

  toggleFestivalSubMenu() {
    this.festivalSubMenuOpen = !this.festivalSubMenuOpen;
  }


}
