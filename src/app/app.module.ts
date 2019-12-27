import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  StudentsListComponent,
  StudentThumbnailComponent,
  StudentService,
  StudentDetailComponent,
  CreateStudentComponent,
  StudentRouterActivator,
  StudentListResolver
} from './students/index';

import { C7AppComponent } from './c7-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.services';
import { appRoutes } from './routes';
import { Error404Component } from './erros/404.component';


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
