import { LoadingService } from './../../_helpers/loading.service'
import { ToastrService } from 'ngx-toastr'
import { VehicleService } from './../../_services/vehicle.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  vehicles: Object
  user: any
  constructor(
    private vehicleService: VehicleService,
    private toastr: ToastrService,
    private loadingService: LoadingService
  ) {
    this.loadingService.setLoading()
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'))

    this.vehicleService.get(null).subscribe((res) => {
      this.vehicles = res
      this.loadingService.clearLoading()
    })
  }

  reserve(vehicleId) {
    this.vehicleService.update(vehicleId, { rentedBy: this.user.user._id }).subscribe((res) => {
      this.toastr.success('Veículo reservado, acesse "Meus veículos" para verificar sua reserva ', 'Sucesso')
      this.ngOnInit()
    })
  }
}
