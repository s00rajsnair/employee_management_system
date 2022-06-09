import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removeemployee',
  templateUrl: './removeemployee.component.html',
  styleUrls: ['./removeemployee.component.css']
})
export class RemoveemployeeComponent implements OnInit {

  id=""
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  removeEmployee(){
    alert("Removed Employee with ID " + this.id)
    this.router.navigate(["dashboard"])
  }
}
