import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TrainingService {

  constructor(private httpClient: HttpClient) { }

  fetchCoursesData() {
    return this.httpClient.get(`assets/data/courses.json`);
  }

}
