import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // The ! operator is a non-null assertion operator in TypeScript.
  // It tells the TypeScript compiler that the variable will be initialized later, so it can skip the strict null checks.
  // This is useful when you are sure that the variable will be initialized before it is used
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // The fromGroup is more declarative and allows you to define the structure of the form in a more readable way.
    this.loginForm = this.formBuilder.group({
      loginid: ['angular', [Validators.required, Validators.minLength(4)]],
      password: ['ngpass', [Validators.required, Validators.minLength(6)]]
      // loginid: ['angular'],
      // password: ['ngpass']
    });
  }
  onSubmit() {
    this.submitted = true;
    // The invalid property of the FormGroup is true if any of the controls in the group are invalid.
    if (this.loginForm.invalid) {
      console.log('Form Validation Failed');
      return;
    }
    // The value property of the FormGroup returns an object containing the values of all the controls in the group.
    const formData = this.loginForm.value;
    // Hit the authservice to connect to the enpoint of your server and then authenticate the user in the backend. // JWT....... strored on the client browser.
    // === checks for both value and type
    if (formData.loginid === 'angular' || formData.password === 'ngpass') {
      // Perform login action
      console.log('Login successful');
      sessionStorage.setItem('loggedIn', "yes");
      this.router.navigate(['/employees']);
    }
    else {
      // Handle login failure
      console.log('Login failed');
      sessionStorage.removeItem('loginid');
    }
  }
}
