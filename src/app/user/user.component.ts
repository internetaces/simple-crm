import { Component, OnInit, inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection, collectionData, docData } from '@angular/fire/firestore';
import { doc, onSnapshot } from "firebase/firestore";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  firestore: Firestore = inject(Firestore)   
  items$: Observable<any[]>;	
  allUsers: any[] = [  ];


  user = new User();

constructor(public dialog: MatDialog) {

}

ngOnInit(): void {
  // User importieren und abonnieren
  const aCollection = collection(this.firestore, 'users')		
  this.items$ = collectionData(aCollection, { idField: 'id' });		// , { idField: 'id' } hinzugefügt für ID des Users
  this.items$.subscribe((users) => { 
    this.allUsers = users;
    console.log(users);
    });

    


}

openDialog(){
  this.dialog.open(DialogAddUserComponent);
}

}
