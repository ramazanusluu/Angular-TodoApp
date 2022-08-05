import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
// import { TodoItem } from '../todo.item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}

  // // private name: string = 'Ramazan';
  // items = ['item 1', 'item 2', 'item 3', 'item 4'];
  // items: TodoItem[] = [
  //   // {
  //   //   description: 'Kahvaltı',
  //   //   action: 'yes',
  //   // },
  //   // {
  //   //   description: 'Spor',
  //   //   action: 'yes',
  //   // },
  //   // {
  //   //   description: 'Alışveriş',
  //   //   action: 'no',
  //   // },
  //   // new TodoItem('Kahvaltı', 'yes'),
  //   // new TodoItem('Spor', 'yes'),
  //   // new TodoItem('Alışveriş', 'no'),
  //   // new TodoItem('Alışveriş', 'no'),
  //   {
  //     description: 'Kahvaltı',
  //     action: 'yes',
  //   },
  //   {
  //     description: 'Spor',
  //     action: 'yes',
  //   },
  //   {
  //     description: 'Alışveriş',
  //     action: 'no',
  //   },
  // ];

  model = new Model();

  getName() {
    return this.model.name;
  }
  getItems() {
    return this.model.items;
  }

  message: string = '';

  // addItem(txtItem: any) {
  //   console.log(txtItem.value);
  // }

  // addItem(value: string) {
  //   console.log(value);
  //   this.message = value;
  // }

  addItem(value: string) {
    if (value != '') {
      this.model.items.push({ description: value, action: 'no' });
    } else {
      alert('Bilgi giriniz !');
    }
  }
}
