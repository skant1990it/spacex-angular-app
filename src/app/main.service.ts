import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // properties
  spacexDataUrl: string;
  spacexDataList = new BehaviorSubject<any>(null);


  constructor(private http: HttpClient) { }

  /** method to get spacex list */
  getSpacexData(selectedYear, launchFlag, landingFlag): Observable<any> {
    this.spacexDataUrl = 'https://api.spaceXdata.com/v3/launches?limit=6';
    if(selectedYear) {
      this.spacexDataUrl = this.spacexDataUrl + '&launch_year='+ selectedYear;
    }
    if(launchFlag === true || launchFlag === false) {
      this.spacexDataUrl = this.spacexDataUrl + '&launch_success='+ launchFlag;
    }
    if(landingFlag === true || landingFlag === false) {
      this.spacexDataUrl = this.spacexDataUrl + '&land_success='+ landingFlag;
    }
    return this.http.get<any>(this.spacexDataUrl);
  }
}
