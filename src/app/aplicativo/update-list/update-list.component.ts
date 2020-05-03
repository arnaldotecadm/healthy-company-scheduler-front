import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AplicativoService } from '../aplicativo.service';
import { SoftwareModel } from '../software.model';

@Component({
  selector: 'app-updates',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css'],
})
export class UpdateListComponent implements OnInit {
  software$ = new Observable<SoftwareModel>();
  softwareId = 0;

  constructor(
    private softwareService: AplicativoService,
    private route: ActivatedRoute,
    private router: Router
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

  addUpdateNote() {
    this.router.navigate(['/update', { softwareId: this.softwareId }]);
  }

  backToList() {
    this.router.navigate(['/app-list']);
  }
}
