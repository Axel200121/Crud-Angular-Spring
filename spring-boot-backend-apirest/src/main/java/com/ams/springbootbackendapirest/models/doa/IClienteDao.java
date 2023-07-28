package com.ams.springbootbackendapirest.models.doa;

import org.springframework.data.repository.CrudRepository;
import com.ams.springbootbackendapirest.models.entity.Cliente;

/// Crud repository no sirve para implementar un crud de forma muy rapida
public interface IClienteDao extends CrudRepository<Cliente, Long> {
	
	
	

}
