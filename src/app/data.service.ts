import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
cities:object;

  constructor(private _http:Http) {
    this.cities = {
      seattle: 5809844,
      sanjose: 5393021,
      burbank: 5331835,
      dallas: 4684888,
      washingtondc: 4366164,
      chicago: 4887398
    }
   }

apicall(loc, callback) {
  console.log("service", loc);
  var code;
  if (loc == "seattle") {
    code = this.cities['seattle']
  }
  if (loc == "sanjose") {
    code = this.cities['sanjose']
  }
  if (loc == "burbank") {
    code = this.cities['burbank']
  }
  if (loc == "dallas") {
    code = this.cities['dallas']
  }
  if (loc == "washingtondc") {
    code = this.cities['washingtondc']
  }
  if (loc == "chicago") {
    code = this.cities['chicago']
  }
  this._http.get('http://api.openweathermap.org/data/2.5/weather?id=' + code + '&&appid=2eae09a6e86115f4782581524c61ec78').subscribe( (res)=> {
    callback(res.json());
  });
}

}
// city codes
// seattle = 5809844
// san jose =  5393021
// burbank = 5331835
// dallas = 4684888
// washington dc = 4366164
// chiago = 4887398



//my API key = &&appid=2eae09a6e86115f4782581524c61ec78