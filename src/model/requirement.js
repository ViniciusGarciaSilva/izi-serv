export class Requirement {
  name;
  priority;

  constructor(name, priority){
    this.name = name ? name : null;
    this.priority = priority ? priority : null;
  }
}
