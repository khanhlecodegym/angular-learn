import { Component, OnInit } from '@angular/core'
import { StudentService } from './services/student.services'
import { ToastrService } from '../common/toastr.services';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from './services/student.model';

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
  students:IStudent[]

  constructor(private studentService: StudentService,
      private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.studentService.getStudents().subscribe(students => {this.students = students});
    this.students = this.route.snapshot.data['students']
  }

  handleClicked(data) {
    if (data === 'ng-nl') {
      this.toastr.error(data, "Insert that bai");
    } else {
      this.toastr.success(data, "Insert thanh coi==");
    }

  }
}
