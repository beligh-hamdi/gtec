import { Component, OnInit } from '@angular/core';
import {TrainingService} from '../../services/training.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Observable<any>;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.courses = this.fetchCoursesData();
  }

  private fetchCoursesData(): Observable<any> {
    return this.trainingService.fetchCoursesData().pipe(
      map((res: any) => res.courses),
    );
  }

}
