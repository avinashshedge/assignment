import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Album } from './albums.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  private albums:any;
private userId:number;

  constructor(private albumServcie :AlbumsService,private activeRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if(params['userId']){
        this.getAlbums(params['userId']);
      }else  if(params['id']) {
          this.getAlbums(params['id']);
      }
    });
  }

  getAlbums(userId){
    this.userId = userId;
    this.albumServcie.getAlbums().subscribe(
      (res:Album[]) =>{
       console.log(res);
        this.albums = res.filter(function(album) {
          return album.userId == userId;
        });
      },
      err => {

      }
    )
  }

  viewPhoto(album){
    this.router.navigate(['/photos', album.id,{userId:this.userId} ]); 
  }

}
