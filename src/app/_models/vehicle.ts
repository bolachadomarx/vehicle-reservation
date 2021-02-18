export interface VehicleModel {
  _id?: string
  model: string
  brand: string
  year: string
  rentedBy: string
  price: number
  kilometers: number
}

export interface UpdateVehicleModel {
  model?: string
  brand?: string
  year?: string
  rentedBy?: string
  price?: number
  kilometers?: number
  rentDate?: Date
}
