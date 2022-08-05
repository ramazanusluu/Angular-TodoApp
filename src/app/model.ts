import { TodoItem } from './todo.item';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Ramazan';
    this.items = [
      {
        description: 'Kahvaltı',
        action: 'yes',
      },
      {
        description: 'Spor',
        action: 'yes',
      },
      {
        description: 'Alışveriş',
        action: 'no',
      },
    ];
  }
}
