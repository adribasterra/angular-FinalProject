import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { WorldListComponent } from './world-list/world-list.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'world-list', component: WorldListComponent, canActivate: [AuthGuard] },
  { path: 'world-map', component: WorldMapComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
