import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { AuthInterceptor } from '../services/AuthInterceptor';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatCardActions,
    MatButton,
    MatError,
    MatLabel,
    MatCardTitle,
    MatInput,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  standalone: true,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      userName: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.value;
      console.log("Nom d'utilisateur:", userName);
      console.log('Password:', password);
      this.authService.login(userName, password).subscribe({
        next: (response) => {
          const jwt = response.headers.get('Authorization').slice(7);
          console.log(response);
          this.authService.setToken(jwt, response.body.userName);
          this.router.navigate(['/pageperso', response.body.userName]);
        },
        error: (error) => {
          console.error('Erreur :', error);
        },
      });
    }
  }

  onCreateAccount() {
    this.router.navigate(['/inscription']);
  }
}
