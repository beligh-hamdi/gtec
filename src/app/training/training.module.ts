import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { TrainingPageComponent } from './components/training-page/training-page.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {TrainingService} from './services/training.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    TrainingRoutingModule
  ],
  providers: [TrainingService],
  declarations: [CourseDetailComponent, CourseListComponent, TrainingPageComponent]
})
export class TrainingModule { }
