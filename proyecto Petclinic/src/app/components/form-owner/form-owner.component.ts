import { Component, OnInit } from '@angular/core';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../servicios/owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  public owner: Owner;
  public textoBoton: string;

  constructor(private ajax: OwnerService, private route: ActivatedRoute, private router: Router) {
    this.owner = new Owner();
    /*this.owner = {
      address: "",
      city: "",
      firstName: "",
      id: -1,
      lastName: "",
      pets: "",
      telephone: ""
    };*/
    this.textoBoton = 'Añadir boton';
  }

  ngOnInit(): void {
    const ownerId = this.route.snapshot.params['id'];
    console.log('Id' + ownerId);
    if (ownerId !== -1) { // es que se trata de una modificacion
      this.textoBoton = 'Modificar Owners';
      this.ajax.getOwnerDetails(ownerId).subscribe(datos => {
        this.owner = datos;
      });
    }
  }

  onSubmit(owner: Owner) {
    if (this.owner.id) {
      owner.id = this.owner.id;
      
      this.ajax.updOwner(owner).subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/owners']);
        },
        error => console.log(error) // 2 callBack
      );
    } else {
      this.ajax.insertarOwner(owner).subscribe(
        resp => {
          console.log("resp insertaOwner --> ", resp);
          if (resp.result === 'OK') {
            alert('Owner añadido recientemente');
            this.router.navigate(['/owners']);
          } else {
            alert('Error al añadir');
          }
        },
        error => console.log(error) // 2 callBack
      );
    }
  }

}
