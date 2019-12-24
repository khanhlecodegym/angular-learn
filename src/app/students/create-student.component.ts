import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-student.component.html'
})
export class CreateStudentComponent {
  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/students'])
  }
}
