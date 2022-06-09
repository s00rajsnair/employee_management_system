import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeData } from '../employee_data';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, deleteDoc } from "firebase/firestore";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  displayedColumns:string[] =  [
    'id','name','address', 'phone'
  ]

  public dataSource:any[] = []

  constructor(private router: Router, private db: AngularFirestore) {
    const employees = db.collection('employees').valueChanges()
    employees.subscribe((data)=>this.dataSource=data);
   }
  

  ngOnInit(): void {
    // this._employeeService.getAllEmployees().subscribe(data=>this.dataSource = data);
  }

  addData(){
    this.router.navigate(["addemployee"])
  }

  removeData(){
    this.router.navigate(["removeemployee"])
  }


}
