import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'my-app';
  show:boolean = true;
  calc:number = 0;
  activo:string;
  materia:string = 'programacion';

  EsMuyListo()
  {
    if (this.calc > 9 && this.materia == 'programacion') {
      return true;
    }else{
      return false;
    }
  }
}
