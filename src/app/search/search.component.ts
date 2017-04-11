import { Component, OnInit } from '@angular/core';
import {Http ,  Response, Headers, RequestOptions } from '@angular/http';;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
value=''; data=[];
  constructor(private http:Http) { }

  ngOnInit() {
  }

    onEnter(value: string) {
    this.value = value;
    this.http.get('http://localhost:3000/api/search?id=' + this.value)
        .map((res: Response) => res.json()).subscribe((dataFromServer) => {
          this.data = dataFromServer;
          console.log('Data from postman is ' + this.data );
        });
  }
}
