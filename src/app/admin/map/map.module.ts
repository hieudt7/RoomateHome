import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './map.routing';
import { MapComponent } from './map.component';
import { MapContentComponent } from './map-content/map-content.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
@NgModule({
  imports: [
    CommonModule, routing
  ],
  declarations: [MapComponent, MapContentComponent, ItemListComponent, ItemDetailComponent]
})
export class MapModule { }
