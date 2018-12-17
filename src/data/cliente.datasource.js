import { Cliente } from './../model/cliente';
import axios from 'axios';

export function getCliente(name) {
  console.log(name);
  return axios('https://iziserv.gq/cliente/1', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      const cliente = response.data;
      console.log(cliente);
      return new Cliente(
        cliente.nome,
        cliente.email,
        'cliente',
      );
    })
    .catch((error) => { throw (error.message) })
}

export function getClienteMock() {
  return clienteMock;
}

const clienteMock = new Cliente(
  'Brad Pitt',
  'bradpitt@hotmail.com',
  'cliente',
);
