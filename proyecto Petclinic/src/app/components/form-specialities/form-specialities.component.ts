import { Component, OnInit } from '@angular/core';
import { Speciality } from '../../models/speciality';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialitiesService } from '../../servicios/specialities.service';

@Component({
  selector: 'app-form-specialities',
  templateUrl: './form-specialities.component.html',
  styleUrls: ['./form-specialities.component.css']
})
export class FormSpecialitiesComponent implements OnInit {
  public speciality: Speciality;
  public textoBoton: string;

  constructor(private specialitiesService: SpecialitiesService, private route: ActivatedRoute, private router: Router) {
    this.speciality = new Speciality();
    this.textoBoton = 'Añadir boton';
  }

  ngOnInit() {
    const specialityId = this.route.snapshot.params['id'];
    console.log('Id espe' + specialityId);

    if (specialityId !== '-1') { // se trata de una modificacion
      this.textoBoton = 'Modificar specialities';
      this.specialitiesService.getSpecialitiesPorId(specialityId).subscribe(datos => {
        this.speciality = datos;
      });
    }
  }

  onSubmit(speciality: Speciality) {
    //speciality.id = null;
    this.specialitiesService.insertarSpecialities(speciality).subscribe(
      resp => {
        console.log("respuesta insertar especialidad --> ", resp);
          alert('especialidad añadida correctamente');
          this.router.navigate(['/specialities']);
      },
      error => console.log("Te ha dado error insertarSpecility --> ", error)
    )
  }
}
