import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  title = 'app works!';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar: any) => this.mostrarMenu = mostrar
    );
  }
}
