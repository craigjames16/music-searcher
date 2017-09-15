import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
    youtubeURL: string;
    soundcloudURL: string;
    spotifyURL: string;

    @Input()
    track: any;

    getURLs(): any {
        if (this.track.youtube.items) {
            this.youtubeURL = 'http://ww.youtube.com/watch?v=' + this.track.youtube.items[0].id
        }
        if (this.track.spotify.items) {
            this.spotifyURL = 'https://open.spotify.com/track/' + this.track.spotify.items[0].id
        }
        if (this.track.soundcloud.items) {
            this.soundcloudURL = 'https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F' + this.track.soundcloud.items[0].id
        }
    }

  constructor() { };

  ngOnInit() {
      this.getURLs()
  }

}
