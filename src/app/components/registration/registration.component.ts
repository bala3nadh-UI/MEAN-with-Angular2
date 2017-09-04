import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalLangConstVariable, GlobalLangVariable } from '../../globals';
import { RegistrationService } from '../../services/registration.service';
import * as patronModel from '../../datamodels/models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() inputName: string;
  address: string;
  displayAddress: boolean = false;

  constructor(
    private http: Http,
    private router: Router,
    private registrationService: RegistrationService,
  ) { }

  ngOnInit() {

  }

  getAll(inputTxt: string) {
    let url = "/getIt/" + inputTxt;
    this.http.get(url).map((res)=>res.json()).subscribe((response:any)=>{
      console.log("yahooo got response..!");
      console.log(response);
      this.displayAddress = true;
      this.address = response.address; 
    }); 
  }

}

