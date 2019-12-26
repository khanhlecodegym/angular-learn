import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { C7AppComponent } from './c7-app.component';
import { StudentsListComponent } from './students/students-list.component';
import { StudentThumbnailComponent } from './students/student-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { StudentService } from './students/services/student.services';
import { ToastrService } from './common/toastr.services';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateStudentComponent } from './students/create-student.component';
import { Error404Component } from './erros/404.component';
import { StudentRouterActivator } from './students/student-detail/student-route-activator.service';
import { StudentListResolver } from './students/student-list-resolver.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    C7AppComponent,
    StudentsListComponent,
    StudentThumbnailComponent,
    StudentDetailComponent,
    CreateStudentComponent,
    Error404Component,
    NavBarComponent
  ],
  providers: [
    StudentService,
    StudentRouterActivator,
    ToastrService,
    StudentListResolver,
    {
      provide: 'canDeactivateCreateStudent',
      useValue: checkDirtyState
    }
  ],
    bootstrap: [C7AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateStudentComponent) {
  if (component.isDirty) {
    return window.confirm('Are you OK??')
  }

  return true;
}
