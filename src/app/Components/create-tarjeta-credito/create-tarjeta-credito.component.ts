import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-tarjeta-credito',
  templateUrl: './create-tarjeta-credito.component.html',
  styleUrls: ['./create-tarjeta-credito.component.css']
})
export class CreateTarjetaCreditoComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: 0,
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      cvv: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
    });
  }

  ngOnInit(): void {

  }

  guardarTarjeta() {
    console.log(this.form);
  }

}
