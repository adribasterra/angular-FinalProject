import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { WorldListComponent } from './world-list/world-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'world-list', component: WorldListComponent},
  { path: 'world-map', component: WorldMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
