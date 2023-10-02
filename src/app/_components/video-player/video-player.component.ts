import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import videojs from 'video.js';

declare var require: any;
require('videojs-contrib-quality-levels');
require('videojs-hls-quality-selector');

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  
  // public player: videojs.Player;
  

  
  url = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const options = {
      'sources': [{
        'src': this.url,
        'type': 'application/x-mpegURL'
      }
      ],
      // 'poster' : this.urlPoster
    };
    // this.player = videojs('my-video', options, function onPlayerReady() {
      // console.log('Player ready');
      // var myPlayer = this, id = myPlayer.id();
      // myPlayer.hlsQualitySelector();
    // });

  }

  ngOnDestroy(): void {
    if (this.player != null) {
      this.player.dispose();
    }
  }

}
