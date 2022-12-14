import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup<any>({
  //   'productName': new FormControl('1650 super'),
  //   'productValue': new FormControl(1650),
  //   'productStock': new FormControl('10'),
  // })

  miFormulario: FormGroup = this.fb.group({
    productName: [, [Validators.required, Validators.minLength(3)]],
    productValue: [, [Validators.required, Validators.min(0)]],
    productStock: [, [Validators.required, Validators.min(0)]],

  })

  constructor(private fb: FormBuilder) {
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  ngOnInit(): void {
    this.miFormulario.setValue({
      productName: 'GTX 1650 SUPER',
      productValue: 1650,
      productStock: 10
    })
  }

  guardar() {
    if (!this.miFormulario.valid) {
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log(this.miFormulario.value)

    this.miFormulario.reset()
  }


}
