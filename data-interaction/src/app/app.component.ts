import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'My App';
  status = 'You haven\'t signed up yet';
  name = '';
     

  signup() {
  
     this.status = 'Oops! We are working on it!';
     
  }
}
