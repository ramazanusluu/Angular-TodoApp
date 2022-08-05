import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}

  private name = 'Ramazan';
  // items = ['item 1', 'item 2', 'item 3', 'item 4'];
  items = [
    {
      id: 1,
      description: 'Kahvaltı',
      action: 'yes',
    },
    {
      id: 2,
      description: 'Spor',
      action: 'yes',
    },
    {
      id: 3,
      description: 'Alışveriş',
      action: 'no',
    },
  ];
  getName() {
    return this.name;
  }
}
