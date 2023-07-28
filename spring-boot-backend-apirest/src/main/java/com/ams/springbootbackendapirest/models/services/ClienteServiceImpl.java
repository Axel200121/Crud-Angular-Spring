package com.ams.springbootbackendapirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ams.springbootbackendapirest.models.doa.IClienteDao;
import com.ams.springbootbackendapirest.models.entity.Cliente;


@Service
public class ClienteServiceImpl implements IClienteService {
	
	//inyectamos con Autowired
	@Autowired
	private IClienteDao clienteDao;
	@Override
	public List<Cliente> findAll() {
		return (List<Cliente>) clienteDao.findAll(); // TODO: mandamos a llamar el metodo
	}

}
