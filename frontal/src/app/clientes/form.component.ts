import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './services/cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo:string = 'Crear cliente';


  constructor(
    private clienteService:ClienteService,
    private router:Router
    ){}

  ngOnInit(): void {

    
  }

  public create(): void{
    this.clienteService.createCliente(this.cliente).subscribe(
      cliente =>{
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con exito`, 'success')
      }
    )
  }

}


