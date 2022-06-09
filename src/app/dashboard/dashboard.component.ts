import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns:string[] =  [
    'id','name','address', 'phone'
  ]
  public dataSource:IEmployee[] = [] 

  constructor(private router: Router, private _employeeService: EmployeeService) { }
  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe(data=>this.dataSource = data);
  }

  addData(){
    this.router.navigate(["addemployee"])
  }

  removeData(){
    this.router.navigate(["removeemployee"])
  }
}
