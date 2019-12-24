import { Routes } from '@angular/router'
import { StudentsListComponent } from './students/students-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { CreateStudentComponent } from './students/create-student.component';

export const appRoutes:Routes = [
  { path: 'students/create', component: CreateStudentComponent },
  { path: 'students', component: StudentsListComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' }
]
