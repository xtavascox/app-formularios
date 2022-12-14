import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initialForm={
    producName:'',
    productValue:0,
    productStock:100
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['productName']?.invalid
      && this.miFormulario.controls['productName']?.touched
  }

  precioValido(): boolean {

    return this.miFormulario?.form.controls['productValue']?.touched &&
           !(this.miFormulario?.form.controls['productValue']?.value >= 0)
  }

  guardar() {
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      productValue:0,
      productStock:0
    })
  }

}
