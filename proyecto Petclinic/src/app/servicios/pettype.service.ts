import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pettype } from '../models/pettype';

@Injectable({
  providedIn: 'root'
})
export class PettypeService {
  url: string = "http://localhost/pruebaAJAX/serviciosWeb/petclinic/servicios.php";

  constructor(private http: HttpClient) {
  }

  getPetType() {
    return this.http.post<Pettype[]>(this.url, JSON.stringify({ accion: 'ListarPettypes' }));
  }

  getPetTypePorId(idPetType) {
    const pa = {
      id: idPetType,
      accion: 'ObtenerOwnerId'
    };
    console.log('pa --> ', pa);
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<Pettype>(this.url, JSON.stringify(pa));
  }

  // insertar un owner en el formulario
  insertarPetType(pettype: Pettype) {

    const pa = {
      accion: 'AnadeOwner',
      owner: pettype,
    };
    console.log('pa --> ', pa);
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  // borramos el owner y mostramos el listado
  delPetTypeList(id: number) {
    const pa = {
      accion: 'BorraOwner',
      id: id,
      listado: 'OK'
    };
    console.log('pa --> ', pa);
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  // borramos el owner y mostramos el listado
  updPetType(pettype: Pettype) {
    const pa = {
      accion: 'ModificaOwner',
      pettype: pettype
    };
    console.log('pa --> ', pa);
    // Owner me devuelve el id osea un objeto de propietarios solo uno
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}

