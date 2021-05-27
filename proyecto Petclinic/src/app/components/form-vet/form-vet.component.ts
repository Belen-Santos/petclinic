import { Component, OnInit } from '@angular/core';
import { Vet } from '../../models/vet';
import { Speciality } from '../../models/speciality';
import { ActivatedRoute, Router } from '@angular/router';
import { VetService } from '../../servicios/vet.service';
import { SpecialitiesService } from '../../servicios/specialities.service';


@Component({
  selector: 'app-form-vet',
  templateUrl: './form-vet.component.html',
  styleUrls: ['./form-vet.component.css']
})
export class FormVetComponent implements OnInit {

  public vet: Vet;
  public especialidades: Speciality[];
  public seleccionados: Speciality[];
  public textoBoton: string;

  constructor(private ajax: VetService, private peti: SpecialitiesService, private route: ActivatedRoute, private router: Router) {
    this.vet = new Vet();
    this.textoBoton = 'Añadir boton';
  }

  ngOnInit(): void {

    this.peti.getSpecialities().subscribe(
      resp => {
        console.log("respuesta listado especialidades --> ", resp);
        this.especialidades = resp;
      },
      error => console.log("Te ha dado error listar especialidades --> ", error)
    )

    const vetId = this.route.snapshot.params['id'];
    console.log('Id: ' + vetId);

    if (vetId !== '-1') { // se trata de una modificacion
      this.textoBoton = 'Modificar Vet';
      this.ajax.getVetPorId(vetId).subscribe(datos => {
        this.vet = datos;
        this.seleccionados = [];
        for (let especialidad of this.vet.specialties) {
          for (let objetoEspec of this.especialidades) {
            if (objetoEspec.id === especialidad.id) {
              this.seleccionados.push(objetoEspec);
            }
          }
        }
        console.log("estas son las especialidades ahora --> ", this.especialidades);
        console.log("seleccionados --> ", this.seleccionados);
      });
    }

  }



  onSubmit(vet: Vet) {
    console.log(vet);
    if (this.vet.id) {

      vet.id = this.vet.id;

      this.ajax.updVet(vet).subscribe(resp => {
        console.log(resp);
        this.router.navigate(['/vets']);
      },
        error => console.log(error) // 2 callBack
      );

    } else {
      this.ajax.insertarVet(vet).subscribe(
        resp => {
          console.log("respuesta insertar Vet --> ", resp);
          if (resp.result === 'OK') {
            alert('Vet añadido correctamente');
            this.router.navigate(['/vets']);
          } else {
            alert('Error al añadir');
          }
        },
        error => console.log("Te ha dado error insertarVet --> ", error)
      );
    }

  }





}
