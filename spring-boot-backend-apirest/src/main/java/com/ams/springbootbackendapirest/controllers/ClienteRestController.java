package com.ams.springbootbackendapirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ams.springbootbackendapirest.models.entity.Cliente;
import com.ams.springbootbackendapirest.models.services.IClienteService;

@RestController
@RequestMapping("/api")
public class ClienteRestController {
	
	@Autowired
	private IClienteService clienteService;
	
	@GetMapping("/clientes/find-all")
	public List<Cliente> findAllClient(){
		return clienteService.findAll();
	}
}
