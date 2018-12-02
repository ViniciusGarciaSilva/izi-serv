export class Sprint {
  theme;
  start;
  end;
  description;

  constructor(theme, start, end, description){
    this.theme=theme;
    this.start=start;
    this.end=end;
    this.description=description;
  }
}

export default Sprint;