export type Priority = 'low' | 'medium' | 'high';

export class Requirement {
  name: string;
  priority: Priority;

  constructor(name: string, priority: Priority){
    this.name = name ? name : '';
    this.priority = priority ? priority : 'low';
  }
}
