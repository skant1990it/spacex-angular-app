import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  //properties
  spaceXDataList: [] = [];

  constructor(private mainService: MainService) { }

  /**
   * method invoke when UI load
   */
  ngOnInit(): void {
    this.getSpacexData();
  }

  /**
   * method to subscribe token to get list of spaceX data.
   */
  getSpacexData() {
    this.mainService.spacexDataList.subscribe((res) => {
      if(res) {
        this.spaceXDataList = res;
      }
    })
  }
}
