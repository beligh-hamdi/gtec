import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private httpClient: HttpClient) { }

  fetchHomeData() {
    return this.httpClient.get(`assets/data/home.json`);
  }

  fetchAboutData() {
    return this.httpClient.get(`assets/data/about.json`);
  }

  fetchNewsData() {
    return this.httpClient.get(`assets/data/news.json`);
  }

}
