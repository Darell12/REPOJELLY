import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './_helpers';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { UsersComponent } from './pages/users/users.component';
import { UserListComponent } from './_components/user-list/user-list.component';
import { UserService } from './_services/user.service';
import { LibraryComponent } from './pages/library/library.component';
import { LibrariesListComponent } from './_components/libraries-list/libraries-list.component';
import { LibraryVideosComponent } from './_components/library-videos/library-videos.component';
import { VideoPlayerComponent } from './_components/video-player/video-player.component';
import { VideoCardComponent } from './_components/video-card/video-card.component';;

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    UsersComponent,
    UserListComponent,
    LibraryComponent,
    LibrariesListComponent,
    LibraryVideosComponent,
    VideoPlayerComponent,
    VideoCardComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UserService,
    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
