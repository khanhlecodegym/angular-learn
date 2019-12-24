import { Component } from '@angular/core';

@Component({
  selector: 'c7-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `,
})
export class C7AppComponent {
  title = 'c7-angular111';
}
