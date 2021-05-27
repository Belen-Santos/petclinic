import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { VetService } from "../../servicios/vet.service";
import { Vet } from '../../models/vet';

@Component({
  selector: 'app-detail-vet',
  templateUrl: './detail-vet.component.html',
  styleUrls: ['./detail-vet.component.css']
})
export class DetailVetComponent implements OnInit {

  public vet: Vet;

  constructor(private peti: VetService, private ruta: Router, private route: ActivatedRoute) {
    this.vet = {
      id: 0,
      firstName: "",
      lastName: "",
      specialties: []
    }
  }

  ngOnInit(): void {
    const vetId = this.route.snapshot.params["id"];
    console.log("esta es la ruta: ", vetId);
    this.peti.getVetPorId(vetId).subscribe(rs => {
      console.log("rs -->", rs);
      this.vet = rs;

    },
      error => console.log("error: ", error))
  }

  del(vet: Vet) {
    console.log("veterinario a borrar --> ", vet);
    const msg = '¿Estas seguro nque quieres borrar a ' + vet.firstName + ' ' + vet.lastName + '??';
    if (confirm(msg)) {
      this.peti.delVetList(vet.id).subscribe(res => {
        console.log(res);
        if (res.result == "OK") {
          this.ruta.navigate(['/vets']);
        }
      });
    }
  }

}
