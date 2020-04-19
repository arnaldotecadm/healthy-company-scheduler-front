import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: "root" })
export class MenssageService {
  constructor(private toastr: ToastrService) {}

  private position = "top";
  private align = "right";
  private title = "";

  public showInfo(
    message: string,
    title?: string,
    position?: string,
    align?: string
  ) {
    this.show(message, title, position, align, "alert-info", "toast-info");
  }

  public showError(
    message: string,
    title?: string,
    position?: string,
    align?: string
  ) {
    this.show(message, title, position, align, "alert-danger", "toast-error");
  }

  public showSucess(
    message: string,
    title?: string,
    position?: string,
    align?: string
  ) {
    this.show(
      message,
      title,
      position,
      align,
      "alert-success",
      "toast-success"
    );
  }

  public showWarning(
    message: string,
    title?: string,
    position?: string,
    align?: string
  ) {
    this.show(
      message,
      title,
      position,
      align,
      "alert-warning",
      "toast-warning"
    );
  }

  private show(message, title, position, align, tipoIcone, tipoAlerta) {
    if (position) {
      this.position = position;
    }
    if (align) {
      this.align = align;
    }
    if (title) {
      this.title = title;
    }

    this.toastr.show(
      message,
      this.title,
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert " + tipoAlerta + " alert-with-icon",
        positionClass: "toast-" + this.position + "-" + this.align,
      },
      tipoAlerta
    );
  }
}
