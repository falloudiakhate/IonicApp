import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public isauth : boolean ;
  public token : string ;

  constructor() { }

  public login(username : string, password : string) : boolean {
    if(username=="Fallou" && password=="fallou2810"){
      this.isauth=true;
      this.saveToken();
    }
    else {
      this.isauth = false;
    }

    return this.isauth;
  }

  private saveToken() {
    this.token = "token";
    localStorage.setItem("MyToken", this.token);
  }

  public loadToken(){
    this.token = localStorage.getItem("MyToken");
    if(this.token=="token"){
      this.isauth = true;
    }
    else {
      this.isauth = false;
    }

    return this.isauth;
  }
}
