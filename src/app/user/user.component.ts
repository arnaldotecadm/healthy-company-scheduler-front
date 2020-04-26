import { UserService } from "./user.service";
import { Usuario } from "./user.interface";

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { tap, switchMap } from "rxjs/operators";
import { AplicativoService } from "app/aplicativo/aplicativo.service";
import { Observable, of, Subject } from "rxjs";
import { Software } from "app/aplicativo/software/software.interface";
import { AlertService } from "app/shared/component/alert/alert.service";
import { MenssageService } from "app/shared/notification/notification.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  public formulario: FormGroup;
  public usuario$: Subject<Usuario> = new Subject<Usuario>();
  public softwares$: Observable<Software[]>;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private aplicativoService: AplicativoService,
    private msgService: MenssageService
  ) {}

  ngOnInit() {
    this.construirFormulario();

    let id = this.route.snapshot.paramMap.get("usuarioId");

    if (!id) return;
    this.userService.getById(id ? +id : 0).subscribe((usuario) => {
      this.formulario.patchValue(usuario);
      this.usuario$.next(usuario);
    });

    this.softwares$ = this.aplicativoService.getAll();
  }

  cancelUpdate() {
    this.router.navigate(["/table"]);
  }

  updateUser() {
    Object.keys(this.formulario.controls).forEach((field) => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    if (this.formulario.invalid) {
      return;
    }
    this.userService
      .salvarRegistro(this.formulario.getRawValue())
      .subscribe((resposta: any) => {
        console.log("Resposta do servidor: " + resposta.message);
        this.router.navigate(["/table"]);
      });
  }

  addSoftware(usuarioId: number) {
    this.userService
      .addSoftware(
        "" + usuarioId,
        this.formulario.get("software").value as string
      )
      .pipe(
        switchMap((resp: any) => {
          console.log("Resposta do servidor: " + resp.message);
          this.formulario.get("software").setValue(null);
          return this.userService.getById(usuarioId);
        })
      )
      .subscribe(
        (usuario: Usuario) => {
          this.usuario$.next(usuario);
        },
        (err) => {
          this.msgService.showError(
            err.error,
            "Ocorre um erro ao tentar processara solicitação"
          );
        }
      );
  }

  removeSoftware(usuarioId: number, softwareId: number) {
    this.userService
      .removeSoftware("" + usuarioId, "" + softwareId)
      .pipe(
        switchMap(() => {
          return this.userService.getById(usuarioId);
        })
      )
      .subscribe((user) => {
        this.usuario$.next(user);
      });
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      company: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: [""],
      address: [""],
      city: [""],
      country: [""],
      postalCode: [""],
      consideration: [""],
      software: [""],
    });
  }

  isFieldValid(field: string) {
    return (
      !this.formulario.get(field).valid && this.formulario.get(field).touched
    );
  }
}
