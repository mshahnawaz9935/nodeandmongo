import { Component } from '@angular/core';
import { Http  ,Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data;
  constructor(private http:Http){
    console.log('how is it going');
    this.http.get('http://localhost:3000/getdata')
            .map((res: Response) => res.json()).subscribe((dataFromServer) => {
      // Now you can use the data
      this.data = dataFromServer;
      console.log(this.data);
    });

  
  }
  
}
