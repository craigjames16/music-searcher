import { Component, OnInit } from '@angular/core';
import { TrackService } from './../track.service';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  tracks: any = 
  [
  {"track_title": "Can I Stay", "source_count": 1, "track_artist": "Ray LaMontagne", "spotify": {"items": [{"percentile": 0, "spotify_preview": null, "id": "6fkmApNvSEmvoVg5lReIjq", "Pop": 47, "dateposted": "2017-09-07"}], "percentile": 0}, "youtube": {"status": "None", "percentile": 0}, "track_id": "00568bcd-2125", "channels": {"total": 1, "list": ["Evening Acoustic"]}, "earliest_dateposted": "2017-09-07", "date_found": "2017-09-11T15:41:44.946230", "soundcloud": {"status": "None", "percentile": 0}, "thumb": "https://i.scdn.co/image/db86fce23fc9f6b30fbe69dfb6d87465879a2a28"}, {"track_title": "Stay", "source_count": 2, "track_artist": "Missy & Blonde", "spotify": {"items": [{"percentile": 0, "spotify_preview": "https://p.scdn.co/mp3-preview/89f8b7c3c75ffb21199a32eee20d8ef2502975a0?cid=84aa4ce44f674897949f684ffb2fa341", "id": "3SHg4VamqiJkGSU5o4zEaD", "Pop": 66, "dateposted": "2017-08-04"}, {"percentile": 0, "spotify_preview": null, "id": "7mZIFYmiHqZ2P5IoL8iNAY", "Pop": 44, "dateposted": "2017-08-23"}], "percentile": 0}, "youtube": {"items": [{"dateposted": "2017-08-15", "percentile": 0, "id": "zdhesDgDH1o", "views": 430088}], "percentile": 0}, "track_id": "02dbe8c8-8d8f", "channels": {"total": 3, "list": ["Hot Acoustic Covers", "Late Night Love", "Trap Nation"]}, "earliest_dateposted": "2017-08-04", "date_found": "2017-08-22T19:06:46.756811", "soundcloud": {"status": "None", "percentile": 0}, "thumb": "https://i.scdn.co/image/6cdbc9491ec71cb76f1cd16a7db8c3439cfbb6a4"}
  ]
  searching: boolean = false;
  tracksFound: boolean = true;

  constructor(private _trackservice: TrackService) { }

  handleSuccess(data) {
      this.tracks = data.items;
      this.searching = false;
      this.tracksFound = true;
  }

  getTracks(query: string) {
      this.searching = true;
      this._trackservice.getTracks(query).subscribe((data: any) => this.handleSuccess(data))
  }
  ngOnInit() {
  }

}
