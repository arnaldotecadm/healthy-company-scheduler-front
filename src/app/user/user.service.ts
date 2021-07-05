import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

const API = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(API + "");
  }

  getDataForGraphPastFourMonth() {
    return this.http.get<any[]>(API + "/graph-last-4-month");
  }

  getCurrentMonth() {
    return this.http.get<any>(API + "/current-month");
  }

  getMonthAnalysis() {
    return this.http.get<any>(API + "/month-analysis");
  }

  getMonthAnalysisAgainstLastMonth() {
    return this.http.get<any>(API + "/month-analysis-comparison");
  }
}
