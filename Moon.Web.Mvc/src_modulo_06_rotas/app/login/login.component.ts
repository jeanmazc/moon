import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './app/login/login.component.html',
  styleUrls: ['./app/login/login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}
