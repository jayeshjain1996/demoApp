import { Injectable } from '@angular/core';
import {User} from "src/app/User.model";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  formData:User;

  getProfiles()
  {
    return this.firestore.collection('users').snapshotChanges();
  }

  constructor(private firestore:AngularFirestore) { }
}
