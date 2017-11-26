import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: Observable<any>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.content = this.fetchHomeData();
  }

  private fetchHomeData(): Observable<any> {
    return this.appService.fetchHomeData().pipe(
      map((res: any) => res.content),
    );
  }
}
