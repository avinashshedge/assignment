import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users/users.service';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from './albums/albums.service';
import { PhotosComponent } from './photos/photos.component';
import { PhotosService } from './photos/photos.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService,AlbumsService,PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
