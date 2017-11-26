import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { TrainingPageComponent } from './components/training-page/training-page.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingPageComponent,
    children: [
      { path: '',  component: CourseListComponent},
      { path: ':id',  component: CourseDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
