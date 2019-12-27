import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IStudent } from './services/student.model';

@Component({
  selector: 'student-thumbnail',
  template: `
    <div class="well thumbnail" [routerLink]="['/students', student.id]">
      <h2>{{student?.name}}</h2>
      <div>Date: {{student?.date}}</div>
      <div [ngStyle]="getStyleTime()" [ngClass]="getStartTimeClass()" [ngSwitch]="student?.time">
        Time: {{student?.time}}
        <span *ngSwitchCase="'8:00 am'">Early Born</span>
        <span *ngSwitchCase="'10:00 am'">Late Born</span>
        <span *ngSwitchDefault>Normal Born</span>
      </div>
      <div>Price: \${{student?.price}}</div>
      <div *ngIf="student?.location">
        <span>Location: {{student?.location?.address}}</span>
        <span class="pad-left">{{student?.location?.city}}, {{student?.location?.country}}</span>
      </div>
      <div [hidden]="!student?.onlineUrl">
        Online URL: {{student?.onlineUrl}}
      </div>
      <button class="btn btn-primary" (click)="handleClickMe()">Click Me!!</button>
    </div>
  `,
  styles: [`
  .green { color: green !important; }
  .bold { font-weight: bold; }
  .thumbnail { min-height: 210px; }
    .well div { color: #bbb; }
    .pad-left { margin-left: 10px; }
  `]
})

export class StudentThumbnailComponent {
  @Input() student:IStudent
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    this.eventClick.emit(this.student.name);
  }

  getStartTimeClass() {
    if (this.student && this.student.time === '8:00 am') {
      return ['green', 'bold']
    }
    return [];
  }

  getStyleTime() {
    if (this.student && this.student.time === '10:00 am') {
      return {color: 'blue', 'font-weight': 'bold'}
    }
    return {};
  }
}
