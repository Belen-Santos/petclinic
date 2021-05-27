import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Speciality } from '../models/speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {
  url: string = "http://localhost/pruebaAJAX/serviciosWeb/petclinic/servicios.php";

  constructor(private http: HttpClient) {
  }

  getSpecialities() {
    return this.http.post<Speciality[]>(this.url, JSON.stringify({ accion: 'ListarSpecialties' }));
  }

  getSpecialitiesPorId(idSpecialty) {
    const pa = {
      id: idSpecialty,
      accion: 'ObtenerSpecialityId'
    };
    console.log('pa -->', pa);
    return this.http.post<Speciality>(this.url, JSON.stringify(pa));
  }


  insertarSpecialities(specialty: Speciality) {
    const pa = {
      accion: 'AnadeSpecialty',
      specialty: specialty,
    };
    console.log('pa --> ', pa);
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  delSpecialitiesList(id: number) {
    const pa = {
      accion: 'BorraSpecialty',
      id: id,
      listado: 'OK'
    };
    console.log('pa --> ', pa);
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }

  updSpecialities(specialty: Speciality) {
    const pa = {
      accion: 'ModificaSpecialty',
      specialty: specialty
    };
    console.log('pa --> ');
    return this.http.post<any>(this.url, JSON.stringify(pa));
  }
}
