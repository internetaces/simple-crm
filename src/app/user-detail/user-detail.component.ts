import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { Firestore, addDoc, collection, collectionData, docData } from '@angular/fire/firestore';
import { doc, onSnapshot } from "firebase/firestore";
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userID:any = '';
  user: User = new User();
  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) { 


  }

  // ID aus URL
  ngOnInit(): void{
    this.userID = this.route.snapshot.paramMap.get('id');
    console.log(this.userID);
    this.getUser();
  }


  getUser() {
    let usersCollection = collection(this.firestore, 'users');
    // Doc mit ID referenzieren
    let userDoc = doc(usersCollection, this.userID);

    // User Abonnieren
    docData(userDoc).subscribe((user: any) => {
    // JSON zum Object User umwandeln
      this.user = new User(user);
      console.log('Current user', this.user);
      console.log(this.user.firstName)
    });
  }

  editUserDetail(){
    
  }

  editMenu(){

  }

}
