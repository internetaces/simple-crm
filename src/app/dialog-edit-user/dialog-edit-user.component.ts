import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  firestore: Firestore = inject(Firestore)	
  items$: Observable<any[]>;	
  user: User;
  userId:string;
  birthDate: Date;
  loading = false;

  constructor(){

  }
  
    ngOnInit(): void {
  
    }
  
  
 //User updaten
 saveUser(){
  console.log(this.user);
this.loading = true;

const coll = doc(this.firestore, 'users', this.userId);
updateDoc(coll, this.user.toJason());
   this.loading = false;
 }

}
