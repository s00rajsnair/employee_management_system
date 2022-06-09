import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})

export class AddemployeeComponent implements OnInit {

  id = ""
  name = ""
  address = ""
  phone = ""
  new_employee: any = []
  employees_data: any = []


  constructor(private _employeeService: EmployeeService, public router:Router) { }

  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe(data => this.employees_data = data)
  }

  addNewEmployee() {
    this.new_employee = { "id": this.id, "name": this.name, "address": this.address, "phone": this.phone }
    console.log(this.employees_data)
    var new_employee_data =  this.employees_data.push(this.new_employee)
    console.log(new_employee_data)
    alert("Added new Employee")
    this.router.navigate(["dashboard"])

  }
}