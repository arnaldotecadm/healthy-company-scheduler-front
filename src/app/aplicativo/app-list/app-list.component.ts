import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Software } from '../software/software.interface';
import { AplicativoService } from '../aplicativo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  softwares$ : Observable<Software[]>;

  constructor(
    private router: Router,
    private aplicativoService : AplicativoService) { }

  ngOnInit() {
    this.softwares$ = this.aplicativoService.getAll();
  }

  addNewSoftware(){
    this.router.navigate(['/software']);
  }

  edit(softwareId : number){
    this.router.navigate(['/software', {softwareId : softwareId}]);
  }

  remove(softwareId : number){
    this.softwares$ = this.aplicativoService.removeById(softwareId)
        .pipe(switchMap( () => {
            return this.aplicativoService.getAll();
        }));
  }
}
