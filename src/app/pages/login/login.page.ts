import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  login() {
    const data = new LoginRequest();
    data.email = this.formLogin.get('email').value;
    data.password = this.formLogin.get('password').value;
    this.loginService.login(data).subscribe({
      next: (res) => {
        if (res.token) {
          console.log('Login exitoso!');
          this.router.navigate(['home']);
        } else {
          console.log('Datos incorrectos!');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
