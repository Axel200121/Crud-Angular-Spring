import { Injectable } from '@angular/core';
import { Cliente } from '../cliente';
import { CLIENTES } from '../clientes.json';
import { Observable, of } from 'rxjs';

//este decorador son para los servicios
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]>{
    return of(CLIENTES);
  }
}
