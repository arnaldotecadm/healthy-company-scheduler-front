import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert, AlerType } from '../alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() timeout = 3000;
  alerts : Alert[] = [];

  constructor(private alertService : AlertService) { 

    this.alertService.getAlert()
      .subscribe( alert =>{
        if(!alert){
          this.alerts = [];
          return;
        } else{
          this.alerts.push(alert);
          setTimeout(() => {
            this.removeAlert(alert)
          }, this.timeout);
        }
      });
  }

  removeAlert(alertToDismiss: Alert){
    this.alerts = this.alerts.filter( alert => alert != alertToDismiss)
  }

  getAlertClass(alert: Alert){
    if(!alert){
      return ""
    }

    switch(alert.alerType){
      case AlerType.SUCCESS:
          return 'alert alert-success';
      case AlerType.INFO:
          return 'alert alert-info';
      case AlerType.WARNING:
        return 'alert alert-warning';
      case AlerType.DANGER:
        return 'alert alert-danger';

    }
  }

}
