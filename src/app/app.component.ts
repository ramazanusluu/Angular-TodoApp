import { Component } from '@angular/core';

@Component({
  selector: 'app',
  // templateUrl: './app.component.html',
  template: `
    <h1>Angular App Component</h1>
    <h2>React vs Angular</h2>
    <h3>{{ title }}</h3>
    <h3>{{ getTitle() }}</h3>
    <div>{{ todoItem.description }} - {{ todoItem.action }}</div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo app';
  todoItem = {
    description: 'deneme',
    action: true,
  };
  getTitle() {
    return this.title;
  }
}
