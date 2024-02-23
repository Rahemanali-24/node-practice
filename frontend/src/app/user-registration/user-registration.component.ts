  import { Component, OnInit } from '@angular/core';
  import { ApiService } from '../services/api.service';
  import { UserData } from '../models/user-data';
  @Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.css']
  })
  export class UserRegistrationComponent implements OnInit {


    userData: UserData = { username: '', email: '', password: '' };
    registeredUser: UserData | undefined;


    constructor(private apiService:ApiService){}

    ngOnInit(): void {
      
    }


    createUser(): void {
      this.apiService.createUser(this.userData).subscribe(
        (response: UserData) => {
          console.log('User created successfully:', response);
          this.registeredUser = response; // Store the registered user's data
        },
        error => {
          console.error('Error creating user:', error);
        }
      );
    }

  }
