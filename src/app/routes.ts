import { Routes } from '@angular/router'
import { StudentsListComponent } from './students/students-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { CreateStudentComponent } from './students/create-student.component';
import { Error404Component } from './erros/404.component';
import { StudentRouterActivator } from './students/student-detail/student-route-activator.service';
import { StudentListResolver } from './students/student-list-resolver.service';

export const appRoutes:Routes = [
  { path: 'students/create', component: CreateStudentComponent, canDeactivate: ['canDeactivateCreateStudent'] },
  { path: 'students', component: StudentsListComponent, resolve: {students: StudentListResolver} },
  { path: 'students/:id', component: StudentDetailComponent , canActivate: [StudentRouterActivator]},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/students', pathMatch: 'full' }
]
