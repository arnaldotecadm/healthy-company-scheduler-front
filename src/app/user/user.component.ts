import { Location } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  identifier = 0;
  obj$: Observable<any>;
  cliente: any;
  displayedColumns: string[] = ["dateStr", "comment", "labelMain", "amount"];
  dataSource: any;
  data;

  graphPastFourMonthData$;
  currentMonth$;

  totalExpenses = 0;
  totalIncome = 0;

  monthAnalysisAgainstLastMonth$;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private service: UserService
  ) {
    this.obj$ = this.service.getAll();
  }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.service.getAll().subscribe((data: any[]) => {
      this.data = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.sort = this.sort;

      this.totalExpenses = data
        .filter((item) => item.amount < 0.0)
        .reduce((acc, val) => (acc -= val.amount), 0);
      this.totalIncome = data
        .filter((item) => item.amount >= 0.0)
        .reduce((acc, val) => (acc += val.amount), 0);
    });

    this.graphPastFourMonthData$ = this.service.getDataForGraphPastFourMonth();
    this.currentMonth$ = this.service.getCurrentMonth();
    this.monthAnalysisAgainstLastMonth$ =
      this.service.getMonthAnalysisAgainstLastMonth();
  }
}
