import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre:'Jose',
      especialidad:'PHP/Angular/Super_Amante',
      descripcion:'Futuro Director Ejecutivo de la oficina de Analisis en el CNE y futuro esposo de Migdaly'
    },

    {
      nombre:'Pedro',
      especialidad:'Un Coño/Ilusionar con un Pizza y no PAGARLA NUNCA!!',
      descripcion:'Capitan Supremo Intergalactico indiscutible de nuestro equipo de futbol ',
    },

    {
      nombre:'Uvencio',
      especialidad:'Angular/BDD',
      descripcion:'Ex-Director de la oficina de Analisis en el CNE',
    },

    {
      nombre:'Ricardo',
      especialidad:'PHP/BDD/Servicio_Tecnico/etc',
      descripcion:'Creador de Wasacaca que dejan perder y pesimos gustos en la eleccion de equipos de futbol',
    },
  ];

  constructor() {
    console.log('Funcionando Servicio GUAPO!!');
   }

   GetTeam()
   {
     return this.equipo;
   }
}
