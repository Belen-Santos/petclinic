import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DetailOwner } from 'src/app/models/detail-owner';
import { OwnerService } from "../../servicios/owner.service";

@Component({
  selector: 'app-detail-owner',
  templateUrl: './detail-owner.component.html',
  styleUrls: ['./detail-owner.component.css']
})
export class DetailOwnerComponent implements OnInit {

  public detallesOwner: DetailOwner;

  constructor(private peti: OwnerService, private ruta: Router, private route: ActivatedRoute) {
    this.detallesOwner = {
      address: "",
      city: "",
      firstName: "",
      id: 0,
      lastName: "",
      pets: "",
      telephone: ""
    }
  }

  ngOnInit(): void {
    const ownerId = this.route.snapshot.params["id"];
    console.log("esta es la ruta: ", ownerId);
    this.peti.getOwnerDetails(ownerId).subscribe(rs => {
      console.log("rs -->", rs);
      this.detallesOwner = rs;

    },
      error => console.log("error: ", error))
  }

  borrar(id: number) {
    this.peti.deleteOwner(id).subscribe(rs => {
      console.log("rs -->", rs);
      if (rs.result == "OK") {
        alert("Owner borrado correctamente");
      }

    },
      error => console.log("error: ", error))
  }



}
