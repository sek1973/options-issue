import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  getData: string = '-';
  optionsData: string = "-";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<any>("/api/data")
      .pipe(tap(resp => {
        this.getData = resp?.data;
        console.assert(resp?.data === 'Data for GET');
      })).subscribe();


    this.http
      .options<any>("/api/data")
      .pipe(tap(resp => {
        this.optionsData = resp?.data;
        console.assert(resp?.data === 'Data for OPTIONS');
      })).subscribe();
  }
}


