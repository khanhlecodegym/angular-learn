import { Component } from '@angular/core';
import { StudentService } from '../services/student.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './student-detail.component.html',
  styles: [`
    .student-image {height: 100px; }
  `]
})

export class StudentDetailComponent {
  student: any

  constructor(private studentService: StudentService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.student = this.studentService.getStudentById(+this.route.snapshot.params['id']);
  }
}
