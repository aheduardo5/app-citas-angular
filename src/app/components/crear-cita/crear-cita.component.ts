import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  nombre = '';
  fecha='';
  hora='';
  sintomas='';
  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  agregarCita= ()=>{
    if(this.nombre == '' || this.fecha =='' || this.hora == ''|| this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    // CREAMOS OBJETO PARA ENVIARSELO AL PADRE
    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    // LIMPIAMOS LOS DATOS
    this.limpiarCampos();
  }
  limpiarCampos = ()=>{
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
