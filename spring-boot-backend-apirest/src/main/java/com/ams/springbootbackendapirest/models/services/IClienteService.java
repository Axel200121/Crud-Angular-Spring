package com.ams.springbootbackendapirest.models.services;

import java.util.List;

import com.ams.springbootbackendapirest.models.entity.Cliente;

public interface IClienteService {
	
	public List<Cliente> findAll();

}
