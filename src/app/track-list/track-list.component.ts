import { Component, OnInit } from '@angular/core';
import { TrackService } from './../track.service';
import { Track } from './../track';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  tracks: Track[];
  searching: boolean = false;
  tracksFound: boolean = false;

  constructor(private _trackservice: TrackService) { }

  handleSuccess(data) {
      this.tracks = data;
    console.log(data);
    this.searching = false;
    this.tracksFound = true;
  }

  getTracks(query: string) {
      this.searching = true;
      this._trackservice.getTracks(query).subscribe((data: Track[]) => this.handleSuccess(data));
  }
  ngOnInit() {
  }

}
