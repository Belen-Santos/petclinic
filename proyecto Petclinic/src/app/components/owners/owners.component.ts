import { Component, OnInit } from '@angular/core';
import { OwnerService } from "../../servicios/owner.service";
import { Owner } from '../../models/owner';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  public listadoOwners: Owner[];

  constructor(private peti: OwnerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.peti.getOwners().subscribe(rs => {
      console.log("rs -->", rs);
      this.listadoOwners = rs;

    },
      error => console.log("error: ", error))
  }

  editar(owner: Owner) {
    console.log('owner' + owner);
    this.router.navigate(['/owners-add/' + owner.id]);
    this.peti.updOwner(owner).subscribe(datos => {
      console.log("datos editar --> ", datos);
      this.listadoOwners = datos;
    },
      error => console.log("error: ", error))
  }

  borrar(owner: Owner) {
    console.log(owner);
    // alert('aqui borramos');
    const msg = '¿Estas seguro que quieres borrar a ' + owner.firstName + ' ' + owner.lastName + '??';
    if (confirm(msg)) {
      this.peti.deleteOwnerList(owner.id).subscribe(datos => {
        this.listadoOwners = datos;
        console.log(this.listadoOwners);
      });
    }
  }

  getOwnerById() {

  }

}
