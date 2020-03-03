import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-class-ng-for',
  templateUrl: './ng-if-ng-class-ng-for.component.html',
  styleUrls: ['./ng-if-ng-class-ng-for.component.css']
})
export class NgIfNgClassNgForComponent implements OnInit {
  
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

  ngOnInit(): void {
  }

}
