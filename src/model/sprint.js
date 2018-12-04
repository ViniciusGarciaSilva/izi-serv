export class Sprint {
  theme;
  start;
  end;
  description;

  constructor(theme, start, end, description){
    this.theme = theme ? theme : null;
    this.start = start ? start : null;
    this.end = end ? end : null;
    this.description = description ? description : null;
  }
}
