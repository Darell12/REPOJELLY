import { Component, OnInit } from '@angular/core';
import { LibraryService } from '@app/_services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less'],
})
export class LibraryComponent implements OnInit {
  libraries: any = [];
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.getLibraries().subscribe(
      (data) => {
      this.libraries = data;
    },
    (error) => {
      console.error('Error fetching users', error)
    });
  }
}
