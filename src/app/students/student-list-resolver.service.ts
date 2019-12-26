import { Resolve } from '@angular/router';
import { StudentService } from './services/student.services';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable()
export class StudentListResolver implements Resolve<any> {
  constructor(private studentService: StudentService) {}

  resolve() {
    return this.studentService.getStudents().pipe(map(students => students))
  }
}
