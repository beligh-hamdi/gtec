import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppService} from '../../services/app.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: Observable<any>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.articles = this.fetchNewsData();
  }

  private fetchNewsData(): Observable<any> {
    return this.appService.fetchNewsData().pipe(
      map((res: any) => res.articles),
    );
  }

}
