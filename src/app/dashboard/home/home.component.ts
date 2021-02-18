import { ToastrService } from 'ngx-toastr'
import { LoadingService } from './../../_helpers/loading.service'
import { VehicleService } from './../../_services/vehicle.service'
import { AuthenticationService } from 'src/app/_services/authentication.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any
  vehicles: any

  constructor(
    private authenticationService: AuthenticationService,
    private vehicleService: VehicleService,
    private loadingService: LoadingService,
    private toastr: ToastrService
  ) {
    this.loadingService.setLoading()
  }

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue.user
    this.vehicleService.get(null).subscribe((res: any) => {
      this.vehicles = res.filter((res) => res.rentedBy === this.user._id)
      this.loadingService.clearLoading()
    })
  }

  cancel(vehicleId) {
    this.vehicleService.update(vehicleId, { rentedBy: null }).subscribe((res) => {
      this.toastr.success('Reserva cancelada', 'Sucesso')
      this.ngOnInit()
    })
  }
}
