import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppService} from '../../services/app.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  content: Observable<any>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.content = this.fetchAboutData();
  }

  private fetchAboutData(): Observable<any> {
    return this.appService.fetchAboutData().pipe(
      map((res: any) => res.content),
    );
  }
}
