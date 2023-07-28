import { Injectable } from '@angular/core';
import { Cliente } from '../cliente';
import { CLIENTES } from '../clientes.json';

//este decorador son para los servicios
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Cliente[]{
    return CLIENTES;
  }
}
