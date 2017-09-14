import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { TrackService } from './track.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    MasonryModule,
    BrowserAnimationsModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
