import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection, collectionData, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit{
  firestore: Firestore = inject(Firestore)	
  items$: Observable<any[]>;	

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(){

  }

  ngOnInit(): void {

  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
console.log(this.user);
this.loading = true;
console.log(this.loading);
    addDoc(collection(this.firestore, 'users'), this.user.toJason());
    this.loading = false;
    console.log(this.loading);
  }
}
