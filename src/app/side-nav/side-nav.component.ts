import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  //properties
  selectedLanchYear:number;
  selectedLanchFlag: boolean;
  selectedLandingFlag: boolean;

  constructor(private mainService: MainService) { }

  /**
   * method run when ui load.
   */
  ngOnInit(): void {
    this.getSpacexData();
  }

  /**
   * method to get and set selected lanch year
   */
  getSelectedLanchYear = ((lanchYear: number) => {
    this.selectedLanchYear = lanchYear;
    this.getSpacexData();
  })

  /**
   * method to get and set success full lanch flag.
   */
  getSuccessFullLanch = ((lanchFlag: boolean) => {
    this.selectedLanchFlag = lanchFlag;
    this.getSpacexData();
  });

   /**
   * method to get and set success full landing flag.
   */
  getSuccessFullLanding = ((landingFlag: boolean) => {
    this.selectedLandingFlag = landingFlag;
    this.getSpacexData();
  });

   /**
   * method to get spacex data when UI load.
   */
  getSpacexData = (() => {
    this.mainService.getSpacexData(this.selectedLanchYear, this.selectedLanchFlag, this.selectedLandingFlag).subscribe((res) => {
      this.mainService.spacexDataList.next(res);
    })
  })





}
