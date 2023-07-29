import { Injectable } from '@angular/core';
import { Cliente } from '../cliente';
import { CLIENTES } from '../clientes.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//este decorador son para los servicios
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 private urlEndPoint: string = 'http://localhost:8080/api'; 
 private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint+'/clientes/find-all')
  }

  createCliente(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint+'/clientes/save', cliente, {headers:this.httpHeaders});
  }
  
}
