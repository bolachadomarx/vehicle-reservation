import { MaterialModule } from './../material.module'
import { DashboardRoutes } from './dashboard.routing'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavComponent } from './nav/nav.component'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles/vehicles.component'

@NgModule({
  declarations: [NavComponent, HomeComponent, VehiclesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
})
export class DashboardModule {}
