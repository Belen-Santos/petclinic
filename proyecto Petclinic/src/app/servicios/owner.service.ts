import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailOwner } from '../models/detail-owner';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public url: string = "http://localhost/pruebaAJAX/serviciosWeb/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  getOwners() {
    let p = { accion: "ListarOwners" }
    return this.http.post<any[]>(this.url, JSON.stringify(p));
  }

  getOwnerDetails(ID) {
    let p = { accion: "ObtenerOwnerId", id: ID }
    console.log('p -->', p);
    return this.http.post<DetailOwner>(this.url, JSON.stringify(p));
  }

  insertarOwner(owner: Owner) {

    const p = {
      accion: 'AnadeOwner',
      owner: owner,
    };
    console.log("p --> ", p);
    return this.http.post<any>(this.url, JSON.stringify(p));
  }


  deleteOwnerList(id: number) {
    const p = {
      accion: 'BorraOwner',
      id: id,
      listado: "OK"
    };
    console.log('p -->', p);
    return this.http.post<any>(this.url, JSON.stringify(p));
  }

  deleteOwner(id: number) {
    const p = {
      accion: 'BorraOwner',
      id: id,
      listado: "No"
    };
    console.log('p -->', p);
    return this.http.post<any>(this.url, JSON.stringify(p));
  }


  updOwner(owner: Owner) {
    const p = {
      accion: 'ModificaOwner',
      owner: owner
    };
    console.log('p --> ', p);
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(p));
  }


}


