import { Injectable } from '@angular/core';
import { StudentService } from '../services/student.services';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class StudentRouterActivator {
  constructor(private studentService: StudentService, private router: Router) {}

  canActivate(router: ActivatedRouteSnapshot) {
    const isStudent = !!this.studentService.getStudentById(+router.params['id']);

    if (!isStudent) {
      this.router.navigate(['/404'])
    }

    return isStudent
  }

}
