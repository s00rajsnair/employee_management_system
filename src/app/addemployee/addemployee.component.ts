import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EmployeeData } from '../employee_data';
import { FormControl, FormGroup } from "@Angular/forms";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


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
  employees_data = EmployeeData


  constructor(public router:Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  addNewEmployee() {
    this.new_employee = { "id": this.id, "name": this.name, "address": this.address, "phone": this.phone }
    this.firestore.collection('employees').add(this.new_employee).then(res=>console.log(res)).catch(e=>console.log(e));
    alert("Added new Employee")
    this.router.navigate(["dashboard"])

  }
}