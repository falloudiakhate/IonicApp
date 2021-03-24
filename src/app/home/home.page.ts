import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public EPTInfo = {
    name : 'Ecole Polytechnique de Thies',
    email : 'ept@ept.sn',
    tel : '+221765438976',
    logo : "assets/img/logo.png",
    location : "assets/img/diom.JPG"

  };

  constructor() {}


}
