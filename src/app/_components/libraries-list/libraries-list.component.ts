import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '@app/_services/library.service';
import {
  CollectionObject,
  LibraryOptions,
} from '@app/interfaces/library.interface';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-libraries-list',
  templateUrl: './libraries-list.component.html',
  styleUrls: ['./libraries-list.component.less'],
})
export class LibrariesListComponent implements OnInit {
  @Input() library: CollectionObject | undefined;

  Name: string = '';
  ItemId: string = '';
  Src: string = ``;
  constructor(private libraryService: LibraryService, private router: Router) {}

  ngOnInit(): void {
    if (this.library) {
      this.Name = this.library.Name;
      this.ItemId = this.library?.ItemId;
      this.Src = `${environment.jellyUrl}/Items/${this.ItemId}/Images/Primary?fillHeight=201&fillWidth=372&quality=96`;
    }
  }

  navigateToDetails() {
    const queryParams = { id: this.ItemId };
    this.router.navigate(['/library-detail'], { queryParams });
  }
}
