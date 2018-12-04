export class Cliente {
  name;
  email;
  office;

  constructor(name, email, office) {
    this.name = name ? name : null; 
    this.email = email ? email : null;
    this.office = office ? office : null;
  }
}
