import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '@app/_services/library.service';
import { MediaItem } from '@app/interfaces/item.interface';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.less'],
})
export class VideoCardComponent implements OnInit {
  @Input()
  item!: MediaItem;
  Src: string = ``;
  ItemId: string = '';

  constructor(private libraryService: LibraryService, private router: Router) {}

  ngOnInit(): void {
    if (this.item) {
      this.ItemId = this.item?.Id;
      this.Src = `${environment.jellyUrl}/Items/${this.ItemId}/Images/Primary?fillHeight=221&fillWidth=392&quality=96`;
    }
  }

  navigateToVideo() {
    const queryParams = { id: this.ItemId };
    this.router.navigate(['/video'], { queryParams });
  }
}
