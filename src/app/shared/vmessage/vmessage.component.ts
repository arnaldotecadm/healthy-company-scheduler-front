import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.css'],
})
export class VMessageComponent {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
}
