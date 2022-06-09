import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeData } from '../employee_data';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CollectionReference } from 'firebase/firestore';
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, where, query, } from 'firebase/firestore';
@Component({
  selector: 'app-removeemployee',
  templateUrl: './removeemployee.component.html',
  styleUrls: ['./removeemployee.component.css']
})
export class RemoveemployeeComponent implements OnInit {

  id = ""
  employeeData = EmployeeData
  db = getFirestore()
  colRef = collection(this.db, "employees")
  constructor(public router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }


  removeEmployee() {
    var deleteId: any[] = []
    const q = query(this.colRef, where("id", "==", this.id))
    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.id)
        this.firestore.collection("employees").doc(doc.id.toString()).delete().then(() => {
          alert("Removed Employee with ID  " + this.id)
        }).catch((error) => {
          alert("Remove document error " + error);
        });
      })
    })



    this.router.navigate(["dashboard"])
  }
}
