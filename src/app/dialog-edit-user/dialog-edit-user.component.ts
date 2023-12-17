import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User;
  userId:string;
  birthDate: Date;
  loading = false;

  constructor(){

  }
  
    ngOnInit(): void {
  
    }
  
  
    saveUser(){
      
    }

}
