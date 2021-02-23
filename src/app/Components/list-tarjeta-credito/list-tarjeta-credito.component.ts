import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';


@Component({
  selector: 'app-list-tarjeta-credito',
  templateUrl: './list-tarjeta-credito.component.html',
  styleUrls: ['./list-tarjeta-credito.component.css']
})
export class ListTarjetaCreditoComponent implements OnInit {

  constructor(public tarjetaService: TarjetaService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.tarjetaService.ListadoTarjeta();
  }

  EliminarTarjeta(id: number) {
    if (confirm('Esta seguro que deseas eliminar?')) {
      this.tarjetaService.EliminarTarjeta(id).subscribe(data => {
        this.toastr.warning('Datos eliminado', 'Confirmado');
        this.tarjetaService.ListadoTarjeta();
      });
    }
  }

  Editar(tarjeta) {
    this.tarjetaService.actualizarTarjeta(tarjeta);
  }

}
