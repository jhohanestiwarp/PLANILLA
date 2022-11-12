import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formato } from '../models/formato';
@Injectable({
  providedIn: 'root'
})
export class formatoService {
  if(id: string | null) {
    throw new Error('Method not implemented.');
  }
  Api: string = 'http://localhost:8090/api/formato';


  constructor(private clienteHttp: HttpClient) { }

  Addformato(datoformato: formato): Observable<any> {
    return this.clienteHttp.post(this.Api, datoformato);
  }

  Listformato() {
    return this.clienteHttp.get(this.Api);
  }

  Deleteformato(id: string): Observable<any> {
    return this.clienteHttp.delete(this.Api + "/" + id);
  }

  Obtenerformato(id: string): Observable<any> {
    return this.clienteHttp.get(this.Api + "/" + id);
  }

  Updateformato(datosformato: formato): Observable<any> {
    return this.clienteHttp.put(this.Api, datosformato);
  }


  Listcontratos() {
    return this.clienteHttp.get(this.Api);
  }



}
