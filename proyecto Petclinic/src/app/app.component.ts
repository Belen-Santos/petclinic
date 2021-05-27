import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootcampTaller5';
  // objeto navBar que va a tener atributos
  public navBar = {
    isNavbarCollapsed: true,
    // para recoger el desplegable de owners para los submenus
    owners: {
      dropdown: true
    },
    vets: {
      dropdown: true
    }
  }
  
  constructor() { }
}
