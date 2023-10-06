import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ConnectionService } from '@app/_services/connection.service';
import { LibraryService } from '@app/_services/library.service';
import { environment } from '@environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('target', { static: true })
  target!: ElementRef;

  private ItemId!: string;
  selectedQuality: string = 'low';
  currentVideoTime: number = 0;
  PreviusPlaysessionId: string = '';
  NewPlaysessionId: string = '';
  CurrentPlaysessionId: string = '';

  videoSources: { quality: string; src: string }[] = [];
  connectionSpeed: string = 'Uknown';

  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    private libraryService: LibraryService,
    private networkService: ConnectionService
  ) {}

  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;

  videorequest = {
    container: 'mp4',
  };

  ngOnInit(): void {
    this.networkService.connectionSpeed$.subscribe((speed) => {
      this.connectionSpeed = speed;
      console.log(this.connectionSpeed);

      if (
        this.connectionSpeed == 'Moderate' ||
        this.connectionSpeed == 'Slow'
      ) {
        Swal.fire({
          title: 'Conexión Lenta!',
          text: 'Te recomendamos bajar la calidad del video',
          icon: 'error',
          timer: 3000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
      }
    });

    this.route.queryParams.subscribe((params) => {
      this.ItemId = params['id'];
      console.log(this.ItemId);

      this.libraryService
        .postPlaySessionChange(this.ItemId, '0')
        .subscribe((response) => {
          console.log('Respuesta PlaySessionId:', response.PlaySessionId);
          this.CurrentPlaysessionId = response.PlaySessionId;

          this.updateVideoSources();
        });
    });
  }

  private updateVideoSources(): void {
    // Actualiza las fuentes de video con el nuevo PlaySessionId
    this.videoSources = [
      {
        quality: 'high',
        src: this.generateVideoSourceUrl('high'),
      },
      {
        quality: 'low',
        src: this.generateVideoSourceUrl('low'),
      },
    ];
  }

  private generateVideoSourceUrl(quality: string): string {
    let Bitrate: string = quality == 'low' ? '292000' : '9682625';
    let AudioBitrate: string = quality == 'low' ? '128000' : '317375';

    return `${environment.jellyUrl}/videos/${this.ItemId}/stream?container=mp4&MediaSourceId=${this.ItemId}&PlaySessionId=${this.CurrentPlaysessionId}&VideoCodec=h264,h264&AudioCodec=aac&AudioStreamIndex=1&VideoBitrate=${Bitrate}&AudioBitrate=${AudioBitrate}&AudioSampleRate=48000&MaxFramerate=29.97003&api_key=1c83cc5a433344dd8824e37568f24aa8&SubtitleMethod=Encode&TranscodingMaxAudioChannels=2&RequireAvc=false&Tag=2c566316aefcea868d4f764c36b168f0&MinSegments=1&BreakOnNonKeyFrames=True&h264-level=41&h264-videobitdepth=8&h264-profile=main&h264-audiochannels=2&aac-profile=lc&h264-rangetype=SDR&h264-deinterlace=true&TranscodeReasons=ContainerBitrateExceedsLimit&runtimeTicks=30000000&actualSegmentLengthTicks=30000000`;
  }

  changeQuality(quality: string): void {
    const video = this.videoPlayer.nativeElement;

    this.currentVideoTime = video.currentTim;

    this.selectedQuality = quality;

    video.onloadedmetadata = () => {
      console.log(video.currentTime);
      video.currentTime = this.currentVideoTime;
    };
  }

  getSelectedVideoSource(): string {
    const selectedSource = this.videoSources.find(
      (source) => source.quality === this.selectedQuality
    );
    return selectedSource ? selectedSource.src : '';
  }

  changeQuality2(): void {
    const video = this.videoPlayer.nativeElement;

    this.currentVideoTime = video.currentTime;

    this.libraryService
      .postPlaySessionChange(this.ItemId, video.currentVideoTime)
      .subscribe((response) => {
        console.log('Respuesta PlaySessionId:', response.PlaySessionId);
        this.PreviusPlaysessionId = this.CurrentPlaysessionId;
        this.CurrentPlaysessionId = response.PlaySessionId;

        this.libraryService
          .deletePlaySessionChange(
            this.PreviusPlaysessionId,
            'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTU3NjEyNTA4NDQ1'
          )
          .subscribe(() => {
            const selectedSource = this.videoSources.find(
              (source) => source.quality === this.selectedQuality
            );
            if (selectedSource) {
              video.src = selectedSource.src;
              video.load();

              video.onloadedmetadata = () => {
                video.currentTime = this.currentVideoTime;
              };

              this.updateVideoSources();
            }
          });
      });
  }
}
