import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import {UserService} from "src/app/user.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imageURL="";

  constructor(public userService:UserService,private firestore:AngularFirestore,
    private storage:AngularFireStorage) { }

    ngOnInit(): void 
    {
      this.resetForm();
    }
  
    resetForm(form?:NgForm)
    {
      if(form!=null)
        form.resetForm();
        this.userService.formData={
           id:null,
           firstname:'',
           lastname:'',
           email:'',
           number:'',
           age:'',
           state:'',
           country:'',
           address:'',
           interest:'',
           imageURL:''
        }
    }
  
    onSubmit(form:NgForm)
    {
      let data=Object.assign({},form.value);
      delete data.id;
      data.imageURL=this.imageURL;
      if(form.value.id==null)
        this.firestore.collection('users').add(data);
      else
        this.firestore.doc('users/'+form.value.id).update(data);
        this.resetForm(form);
    }
  
    imageSelected(event: any){
      const file: File = event.target.files[0];
      console.log("Selected filename: ",file.name);
      var filePath = `users/${file.name}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath,file).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            this.imageURL=url;
          })
        })
      ).subscribe();
    }
  
    

}
