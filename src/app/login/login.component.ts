import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(loginForm: { value: { email: string; password: string }; }) {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    alert(`Email: ${email}\nMot de passe: ${password}`);
  }
}