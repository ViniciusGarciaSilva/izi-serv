export class Sprint {
  theme: string;
  start: Date;
  end: Date;
  description: string;

  constructor(theme: string, start: Date, end: Date, description: string){
    this.theme = theme ? theme : '';
    this.start = start ? start : null;
    this.end = end ? end : null;
    this.description = description ? description : '';
  }
}
