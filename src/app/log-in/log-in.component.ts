import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  loginForm !: FormGroup;
 

  constructor(private fb: FormBuilder, private http: HttpClient, private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required]),
    });
  }

  
  onSubmit() {

    const reqBody= {
      "email":this.loginForm.value.username,
      "password":this.loginForm.value.password,
    }


    this.authService.login(reqBody).subscribe(
      (response:any) => {
        console.log('Login successful');
        // Redirect to home page 

        this.router.navigate(['/home'])
      },
      (error) => {
        console.log('Login failed:', error);
        // Display error message to user
      }
    )
    // Handle login form submission here
  }
}

