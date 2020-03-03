import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leccion-ng-for',
  templateUrl: './leccion-ng-for.component.html',
  styleUrls: ['./leccion-ng-for.component.css']
})
export class LeccionNgForComponent implements OnInit {

  gustos:string[] = ['Mujeres','Dinero','Futbol', 'Dulces', 'Anime', 'Videojuegos', 'Trabajar'];
  perras:string[] = ['Daniela', 'Dannesa', 'Ibelise'];

  ACPirata:Array<any> = [
    {nombre:'Jose',edad:23, cedula:25418204, sexo:'M'},
    {nombre:'Ibelise',edad:17, cedula:28546931, sexo:'F'},
    {nombre:'Pedro',edad:23, cedula:25896321, sexo:'M'},
    {nombre:'Migdaly',edad:21, cedula:27127539, sexo:'F'},
    {nombre:'Esmeralda',edad:60, cedula:6102995, sexo:'F'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
