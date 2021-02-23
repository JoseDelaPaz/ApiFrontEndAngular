import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Toast, ToastrService } from 'ngx-toastr';
import { tarjetaCredito } from 'src/app/models/tarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-create-tarjeta-credito',
  templateUrl: './create-tarjeta-credito.component.html',
  styleUrls: ['./create-tarjeta-credito.component.css']
})
export class CreateTarjetaCreditoComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private tarjetaService: TarjetaService,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      id: 0,
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  guardarTarjeta() {
    const tarjeta: tarjetaCredito = {
      titular: this.form.get('titular').value,
      numeroTarjeta: this.form.get('numeroTarjeta').value,
      fechaExpiracion: this.form.get('fechaExpiracion').value,
      cvv: this.form.get('cvv').value,
    }

    this.tarjetaService.guardarTarjeta(tarjeta).subscribe(data => {
      this.toastr.success('Datos Agregados', 'Tarjeta de Credito');
      this.form.reset();
    });
  }

}
