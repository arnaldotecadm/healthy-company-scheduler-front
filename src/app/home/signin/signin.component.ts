import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private authService : AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuider.group({
      username: ['arnaldotecadm', Validators.required],
      password: ['arnaldotecadm', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(userName, password)
        .subscribe(
            () => this.router.navigate(['/dashboard']),
            err => {
                console.log(err);
                this.loginForm.reset();
            }
        );
  }
}
