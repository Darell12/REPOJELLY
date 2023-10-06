import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { UsersComponent } from './pages/users/users.component';
import { LibraryComponent } from './pages/library/library.component';
import { LibraryVideosComponent } from './_components/library-videos/library-videos.component';
import { VideoPlayerComponent } from './_components/video-player/video-player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'library-detail', component: LibraryVideosComponent },
  { path: 'video', component: VideoPlayerComponent },
  { path: 'videotest', component: HomeComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
