import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { RunHelpers } from 'rxjs/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_Management_System';

  constructor(public router:Router){}
  goToDashboard(){
    this.router.navigate(["dashboard"])
  }
}
