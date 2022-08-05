import { TodoItem } from './todo.item';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Ramazan';
    this.items = [
      {
        description: 'Kahvaltı',
        action: true,
      },
      {
        description: 'Spor',
        action: true,
      },
      {
        description: 'Alışveriş',
        action: false,
      },
    ];
  }
}
