import { Component, OnInit } from '@angular/core'
import { StudentService } from './services/student.services'
import { ToastrService } from '../common/toastr.services';

@Component({
  selector: 'students-list',
  template: `
  <div>
    <h1>Chúng tôi là C7</h1>
    <div class="row">
      <div *ngFor="let student of students" class="col-md-5">
        <student-thumbnail (click)="handleClicked(student.name)"
          [student]="student"></student-thumbnail>
      </div>
    </div>
  <div>

  `
})

export class StudentsListComponent implements OnInit{
  students:any[]

  constructor(private studentService: StudentService,
      private toastr: ToastrService) {

  }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  handleClicked(data) {
    if (data === 'ng-nl') {
      this.toastr.error(data, "Insert that bai");
    } else {
      this.toastr.success(data, "Insert thanh coi==");
    }

  }
}
