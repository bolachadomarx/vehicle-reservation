import { HomeComponent } from './home/home.component'
import { Routes } from '@angular/router'
import { NavComponent } from './nav/nav.component'
import { VehiclesComponent } from './vehicles/vehicles.component'

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'veiculos',
        component: VehiclesComponent,
      },
    ],
  },
]
