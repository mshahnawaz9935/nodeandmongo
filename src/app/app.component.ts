import { Component } from '@angular/core';
import { Http  ,Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = [];
  text = '';
  constructor(private http:Http){
    console.log('how is it going');
    this.http.get('http://localhost:3000/api/getdata')
            .map((res: Response) => res.json()).subscribe((dataFromServer) => {
      // Now you can use the data
      this.data = dataFromServer;
      this.text  = this.data[1].name;
      console.log('my data is' + this.data[0],  this.data[1].name );
    });
     this.http.get('http://kdeg-vm-43.scss.tcd.ie:7080/ALMANAC_Personalised_Composition_Service/composer/search2?query=volcano')
       .map((res: Response) => res.json()).subscribe((dataFromServer) => {
      // Now you can use the data
      this.data = dataFromServer;
      console.log('Data from postman is ' + this.data );
    });

     

  
  }
  
}
