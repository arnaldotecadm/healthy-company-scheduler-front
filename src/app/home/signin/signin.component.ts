import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/core/auth/auth.service";
import { UserService } from "app/core/user/user.service";
import { MenssageService } from "app/shared/notification/notification.service";

@Component({
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private msgService: MenssageService
  ) {}

  ngOnInit() {
    if (this.userService.isLogged()) {
      this.router.navigate(["excecoes"]);
    }

    this.loginForm = this.formBuider.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.get("username").value)
        this.loginForm.get("username").setErrors(null);

      if (this.loginForm.get("password").value)
        this.loginForm.get("password").setErrors(null);
    });
  }

  login() {
    const userName = this.loginForm.get("username").value;
    const password = this.loginForm.get("password").value;

    this.authService.authenticate(userName, password).subscribe(
      () => this.router.navigate(["/excecoes"]),
      (err) => {
        switch (err.status) {
          case 0:
            this.msgService.showError(
              "Ocorreu um erro ao tentar acessar o servidor de Autentições. Tente novamente mais tarde.",
              "Falha na conexão"
            );
            break;
          case 401:
            this.msgService.showError(
              "Usuário e Senha incorretas.Por favor verifique as informações e tente novamente.",
              "Acesso não permitido!"
            );
            this.loginForm.get("username").setErrors({ userName: true });
            this.loginForm.get("password").setErrors({ password: true });
            break;
          default:
            this.msgService.showError(
              "Ocorreu um erro desconhecido, mas não se preocupe;  Já estamos trabalhando para resolver o problema.",
              "Atenção"
            );
            break;
        }
      }
    );
  }
}
