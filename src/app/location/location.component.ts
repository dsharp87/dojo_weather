import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  humidity:number;
  tempavg:number;
  temphigh:number;
  templow:number;
  status:string;
  name:string;

  constructor(private _dataservice:DataService, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe((params) => { 
      console.log(params.get('location'))
      this.apicall(params.get('location'))
      this.name = params.get('location')
    });
  }

  apicall(loc) {
    console.log("component", loc);
    this._dataservice.apicall(loc, (data)=> {
      console.log(data)
      this.humidity = data.main.humidity;
      this.tempavg = data.main.temp;
      this.templow = data.main.temp_min;
      this.temphigh = data.main.temp_max;
      this.status = data.weather[0].main;
    });
  }

  ngOnInit() {
  }

}
