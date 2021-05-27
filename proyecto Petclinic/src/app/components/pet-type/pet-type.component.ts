import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pettype } from '../../models/pettype';
import { PettypeService } from '../../servicios/pettype.service';

@Component({
  selector: 'app-pet-type',
  templateUrl: './pet-type.component.html',
  styleUrls: ['./pet-type.component.css']
})
export class PetTypeComponent implements OnInit {

  public petTypes: Array<Pettype>;

  constructor(private route: ActivatedRoute, private router: Router, private petTypeService: PettypeService) {
    petTypeService.getPetType().subscribe(datos => {
      this.petTypes = datos;
      console.log(this.petTypes);
    });
  }

  ngOnInit() {
  }

  onSelect(p: Pettype) {
    this.router.navigate(['/types', p.id]);
  }

  // funcion del html del ownwer para borrar Y ME DEVUELVE LA LISTA
  del(p: Pettype) {
    console.log(p);
    // alert('aqui borramos');
    const msg = '¿Estas seguro nque quieres borrar a :?' + p.name;
    if (confirm(msg)) {
      this.petTypeService.delPetTypeList(p.id).subscribe(datos => {
        this.petTypes = datos;
        console.log(this.petTypes);
      });
    }
  }

  // modificamos
  upd(typeID) {
    console.log('types id' + typeID);
    this.router.navigate(['/types-add', typeID]);
    this.petTypeService.updPetType(typeID).subscribe(datos => {
      this.petTypes = datos;
      console.log(this.petTypes);
    });
  }

}
