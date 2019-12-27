import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor() {

  }

  login(formValues) {
  console.log("TCL: LoginComponent -> login -> formValues", formValues)

  }
}
