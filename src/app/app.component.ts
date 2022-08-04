import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
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
