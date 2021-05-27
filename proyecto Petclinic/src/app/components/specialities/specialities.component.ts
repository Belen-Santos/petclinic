import { Component, OnInit } from '@angular/core';
import { Speciality } from '../../models/speciality';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialitiesService } from '../../servicios/specialities.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})

export class SpecialitiesComponent implements OnInit {
  public specialities: Array<Speciality>;

  constructor(private route: ActivatedRoute, private router: Router, private specialitiesService: SpecialitiesService) {

    specialitiesService.getSpecialities().subscribe(datos => {
      this.specialities = datos;
      console.log(this.specialities);
    });
  }

  ngOnInit() {
  }

  onSelect(s: Speciality) {
    //this.router.navigate(['/specialities', s.id]);
  }

  // funcion del html del ownwer para borrar Y ME DEVUELVE LA LISTA
  del(speciality: Speciality) {
    console.log(speciality);
    const msg = '¿Estas seguro nque quieres borrar a :?' + speciality.name;
    if (confirm(msg)) {
      this.specialitiesService.delSpecialitiesList(speciality.id).subscribe(datos => {

        if (datos.result === 'OK') {
          alert('se ha borrado la specility');
        }

        //this.specialities = datos;
        //console.log(this.specialities);
      });
    }
  }

  upd(specialityId) {
    console.log('specialityId' + specialityId);
    this.router.navigate(['/specialities-add', specialityId]);
    this.specialitiesService.updSpecialities(specialityId).subscribe(datos => {
      this.specialities = datos;
      console.log(this.specialities);
    });
  }
}

