import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      templates: [
        { id: 1, name: 'Reservation Reminder', content: '<h1>Reminder</h1>' }
      ]
    };
  }
}
