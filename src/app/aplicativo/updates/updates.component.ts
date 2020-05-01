import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AplicativoService } from '../aplicativo.service';
import { Software } from '../software.interface';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css'],
})
export class UpdatesComponent implements OnInit {
  software$ = new Observable<Software>();
  softwareId = 0;

  constructor(
    private softwareService: AplicativoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.softwareId = +params.get('softwareId');
      this.buscarsoftware(this.softwareId);
    });
  }

  buscarsoftware(softwareId: number): void {
    this.software$ = this.softwareService.getById(softwareId);
  }
}
