import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vet } from '../models/vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  url: string = "http://localhost/pruebaAJAX/serviciosWeb/petclinic/servicios.php";

  constructor(private http: HttpClient) {
  }


  getVets() {
    return this.http.post<Vet[]>(this.url, JSON.stringify({ accion: 'ListarVets' }));
  }

  getVetPorId(idvet) {
    const pa = {
      id: idvet,
      accion: 'ObtenerVetId'
    };
    console.log("pa --> ", pa);
    return this.http.post<Vet>(this.url, JSON.stringify(pa));
  }


  insertarVet(vet: Vet) {
    const pa = {
      accion: 'AnadeVet',
      vet: vet,
      //specialties: '2'
    };
    console.log("pa --> ", pa);
    return this.http.post<any>(this.url, JSON.stringify(pa));

  }


  delVetList(id: number) {
    const pa = {
      accion: 'BorraVet',
      id: id
    };
    console.log("pa --> ", pa);
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  updVet(vet: Vet) {
    const pa = {
      accion: 'ModificaVet',
      vet: vet
    };
    console.log("pa --> ", pa);
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}
