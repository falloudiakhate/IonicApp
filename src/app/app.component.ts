import { Component } from '@angular/core';
import {AuthentificationService} from './services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private  authService : AuthentificationService, private router : Router) {
    this.login()
  }

  private login() {
    let isauth : boolean = this.authService.loadToken();
    if(isauth==true){
      this.router.navigateByUrl("menu/home")
    }
    else {
      this.router.navigateByUrl("login")
    }
  }
}
