import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserModel } from './user.model';
import { UsersService } from './users.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData!:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private userService: UsersService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.userData = this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.required],
    })
  }
  loginUser(form:any){
    const data = new UserModel(this.userData.value.email, this.userData.value.password)

    this.userService.login(data).subscribe( response => {
      console.log(response)
      if(response){
        this.userService.saveUserLocalStorage(response)
        this.router.navigate(['/candidatos'])
      }
    })
    
  }
  get userForm(){
    return this.userData.controls
  }  

}
