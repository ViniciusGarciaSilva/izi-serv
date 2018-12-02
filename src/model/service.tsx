export type ServiceStatus = 'notStarted' | 'onGoing' | 'finished'

export class Service {
  name: string;
  description: string;
  status: ServiceStatus;
  theme: string;

  constructor(name: string, description: string, status: ServiceStatus, theme: string) {
    this.name = name ? name : '';
    this.description = description ? description : '';
    this.status = status ? status : 'notStarted';
    this.theme = theme ? theme : '';
  }
}
