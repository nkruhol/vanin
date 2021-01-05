import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vanin';

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get("/hello").pipe().subscribe(i => console.log(i));

    this.http.get("/participants").pipe().subscribe(i => console.log(i));

  }
}
