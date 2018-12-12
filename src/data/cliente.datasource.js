import { Cliente } from './../model/cliente';

export function getCliente(name) {
  return clienteMock;
}

export function getClienteMock() {
  return clienteMock;
}

const clienteMock = new Cliente(
  'Brad Pitt',
  'bradpitt@hotmail.com',
  'cliente',
);
