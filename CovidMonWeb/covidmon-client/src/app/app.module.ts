import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MetricSelectorComponent } from './metric-selector/metric-selector.component';
import { UnitedstatesMapComponent } from './unitedstates-map/unitedstates-map.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitedstatesMapComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MetricSelectorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
