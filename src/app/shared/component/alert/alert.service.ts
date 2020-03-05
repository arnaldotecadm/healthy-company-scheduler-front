import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlerType } from 'app/shared/component/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject : Subject<Alert> = new Subject<Alert>();

  success(message : string){
    this.alertSubject.next(new Alert(AlerType.SUCCESS, message));
  }

  warning(message : string){
    this.alertSubject.next(new Alert(AlerType.WARNING, message));
  }

  danger(message : string){
    this.alertSubject.next(new Alert(AlerType.DANGER, message));
  }

  info(message : string){
    this.alertSubject.next(new Alert(AlerType.INFO, message));
  }

  private alert(alert : AlerType, message : string){
    this.alertSubject.next(new Alert(alert, message));
  }

  getAlert(){
    return this.alertSubject.asObservable();
  }
}
