import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
// import { TodoItem } from '../todo.item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  displayAll: boolean = false;

  // inputtan girilen değeri karşılayacak text
  inputText: string = '';

  message: string = '';

  constructor() {}

  // // private name: string = 'Ramazan';
  // // items = ['item 1', 'item 2', 'item 3', 'item 4'];
  // // items: TodoItem[] = [
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
  // //   {
  // //     description: 'Kahvaltı',
  // //     action: 'yes',
  // //   },
  // //   {
  // //     description: 'Spor',
  // //     action: 'yes',
  // //   },
  // //   {
  // //     description: 'Alışveriş',
  // //     action: 'no',
  // //   },
  // // ];

  model = new Model();

  getName() {
    return this.model.name;
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  // // message: string = '';

  // // addItem(txtItem: any) {
  // //   console.log(txtItem.value);
  // // }

  // // addItem(value: string) {
  // //   console.log(value);
  // //   this.message = value;
  // // }

  addItem() {
    if (this.inputText != '') {
      this.model.items.push({ description: this.inputText, action: false });
      this.inputText = '';
    } else {
      alert('Bilgi giriniz !');
    }
  }
  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length == 1,
    };
  }
}
