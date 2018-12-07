import { Cliente } from './../model/cliente';

export function getCliente(name) {
  return clienteMock;
}

const clienteMock = new Cliente(
  'Cliente 1',
  'cliente1@email.com',
  'cliente',
);