import { AuthenticationService } from 'src/app/_services/authentication.service'
import { UpdateVehicleModel, VehicleModel } from './../_models/vehicle'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

export interface FilterValue {
  [key: string]: string
}

@Injectable({ providedIn: 'root' })
export class VehicleService {
  url = environment.api
  headers: HttpHeaders

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    const token = this.authenticationService.currentUserValue.token
    this.headers = new HttpHeaders({ Authorization: `Bearer ${token}` })
  }

  get(queryParams: FilterValue) {
    return this.http.get(`${this.url}/vehicle`, { headers: this.headers, params: queryParams })
  }

  create(vehicleData: VehicleModel) {
    return this.http.post(`${this.url}/vehicle`, vehicleData, { headers: this.headers })
  }

  update(vehicleId: string, vehicleData: UpdateVehicleModel) {
    console.log(vehicleData)

    return this.http.put(`${this.url}/vehicle/${vehicleId}`, vehicleData, { headers: this.headers })
  }
}
