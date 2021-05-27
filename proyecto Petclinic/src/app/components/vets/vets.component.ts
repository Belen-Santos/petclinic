import { Component, OnInit } from '@angular/core';
import { Vet } from '../../models/vet';
import { VetService } from '../../servicios/vet.service';
import { Owner } from '../../models/owner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  public vets: Array<Vet>;

  constructor(private vetService: VetService, private route: ActivatedRoute, private router: Router) {
    vetService.getVets().subscribe(datos => {
      this.vets = datos;
      console.log(this.vets);
    });
  }

  ngOnInit() {
  }

  // modificamos
  upd(vetId) {
    console.log('vets id' + vetId);
    this.router.navigate(['/vets-add', vetId]);
    /*this.vetService.updVet(vetId).subscribe(datos => {
      this.vets = datos;
      console.log(this.vets);
    });*/
  }
}
