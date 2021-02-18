import { LoadingService } from './../../_helpers/loading.service'
import { ToastrService } from 'ngx-toastr'
import { VehicleService } from './../../_services/vehicle.service'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ConfirmReservationDialogComponent } from '../_components/confirm-reservation-dialog/confirm-reservation-dialog.component'
import { differenceInCalendarDays, parseISO } from 'date-fns'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  vehicles: Object
  user: any
  constructor(
    private dialog: MatDialog,
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

  reserve(vehicleId): void {
    const message = 'Selecione até quando você deseja reservar este veículo'

    const dialogData = {
      title: 'Tempo de aluguel',
      message,
    }

    const dialogRef = this.dialog.open(ConfirmReservationDialogComponent, {
      maxWidth: '500px',
      data: dialogData,
    })

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        this.loadingService.setLoading()
        this.vehicleService
          .update(vehicleId, { rentedBy: this.user.user._id, rentDate: dialogResult })
          .subscribe((res) => {
            this.toastr.success('Veículo reservado, acesse "Meus veículos" para verificar sua reserva ', 'Sucesso')
            this.ngOnInit()
          })
      }
    })
  }

  calculateDays(rentDate) {
    return differenceInCalendarDays(parseISO(rentDate), new Date())
  }
}
