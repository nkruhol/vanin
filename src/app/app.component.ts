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

    this.http.get("http://localhost:9000/hello").pipe().subscribe(i => console.log(i));

    this.http.get("http://localhost:9000/participants").pipe().subscribe(i => console.log(i));

  }
}
