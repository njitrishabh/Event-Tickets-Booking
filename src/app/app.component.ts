import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, from, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headertitle = 'Eventsmaster';
  footertitle = "footer";
  title = 'event-tickets-booking';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

}
