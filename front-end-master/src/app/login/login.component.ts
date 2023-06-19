import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
interface LoginResponse {
  token: string;
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  user: any = {
    userName: '',
    userPassword: ''
  };
  showPassword: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      const { userName, userPassword } = this.user;

      // Determine the login endpoint based on the user type
      const loginEndpoint = (userName === 'admin') ? '/forAdmin' : '/forUser';

      // Make an HTTP request to the corresponding login endpoint
      this.http.post<LoginResponse>(loginEndpoint, { userName, userPassword })
        .subscribe(
          (response: LoginResponse) => {
            // Handle the successful login response
            console.log('Login successful:', response);

            // Reset the form
            loginForm.resetForm();

            // Clear the user object
            this.user = {
              userName: '',
              userPassword: ''
            };

            // Store the token and role in local storage for future requests
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);

            // Redirect to the appropriate dashboard based on the user type
            if (response.role === 'admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/user']);
            }
          },
          (error: any) => {
            // Handle the login error
            console.error('Login error:', error);
          }
        );
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
