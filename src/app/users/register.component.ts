import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserModel } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userData!:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit(): void {

    this.userData = this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.required],
    })
  }
  saveUser(form:any){
    const data = new UserModel(this.userData.value.email, this.userData.value.password)

    this.userService.register(data).subscribe( response => {
      console.log(response)
    })
    
  }
  get userForm(){
    return this.userData.controls
  }  


}
