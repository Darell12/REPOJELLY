import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '@app/_services/library.service';
import { ApiResponse, MediaItem } from '@app/interfaces/item.interface';

@Component({
  selector: 'app-library-videos',
  templateUrl: './library-videos.component.html',
  styleUrls: ['./library-videos.component.less'],
})
export class LibraryVideosComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService
  ) {}

  Items: MediaItem[] = [];
  libraryId: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.libraryId = params['id'];
      console.log(this.libraryId);
    });

    this.libraryService
      .getItemsLibrary('e7dac62c400741428dfccfd6069955fc', this.libraryId)
      .subscribe(
        (data: any) => {
          this.Items = data.Items;
        },
        (error) => {
          console.error('Error fetching library items:', error);
        }
      );
  }
}
