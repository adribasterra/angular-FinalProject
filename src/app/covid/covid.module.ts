import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { WorldListComponent } from './world-list/world-list.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [DashboardComponent, WorldMapComponent, WorldListComponent],
  imports: [ CommonModule, CovidRoutingModule, LeafletModule ]
})
export class CovidModule { }
