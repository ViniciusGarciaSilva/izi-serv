export class Integrador {
  name: string;
  email: string;
  office: string;

  constructor(name: string, email: string, office: string) {
    this.name = name ? name : '';
    this.email = email ? email : '';
    this.office = office ? office : '';
  }
}
