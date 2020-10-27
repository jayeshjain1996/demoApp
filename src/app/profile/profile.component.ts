import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/User.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private firestore:AngularFirestore,private userService:UserService) { }
  userList:User[];
  ngOnInit(): void 
  {
    this.userService.getProfiles().subscribe(actionArray => {
      this.userList=actionArray.map(item=>{
        return {
          ...item.payload.doc.data() as {}
        } as User;
      })
    });
  }

  onEdit(u:User)
  {
    this.userService.formData=Object.assign({},u);
  }

}
