import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private service: UserService,
    fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      username: [''],
      password: [''],
    });
  }

  doLogin() {}

  goToHome() {
    return () => {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      let exist = false;

      this.service.getUserToLogIn(username)?.subscribe((log) => {
        console.log(log);

        if (log.password === password) {

          this.service.setSesionActiveUser(log);
          this.router.navigateByUrl('home');

        } else console.log('Credenciales erroneas');
      });
    };
  }
}
