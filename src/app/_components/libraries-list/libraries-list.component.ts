import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '@app/_services/library.service';
import {
  CollectionObject,
  LibraryOptions,
} from '@app/interfaces/library.interface';

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
  constructor(private libraryService: LibraryService) {}
  
  ngOnInit(): void {
    if (this.library) {
      this.Name = this.library.Name;
      this.ItemId = this.library?.ItemId;
      this.Src = `http://localhost:8096/Items/${this.ItemId}/Images/Primary?fillHeight=221&fillWidth=392&quality=96`
    }
  }
}
