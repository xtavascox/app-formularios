import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [, Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: false
  }

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    // this.miFormulario.reset(this.persona)
    this.miFormulario.valueChanges.subscribe((form)=>{
      console.log(form)
    })
  }

  guardar() {
    const formValue = {...this.miFormulario.value}
    delete formValue.condiciones;
    this.persona = formValue;
  }
}
