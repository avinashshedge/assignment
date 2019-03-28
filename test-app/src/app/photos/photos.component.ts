import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from './photos.service';
import { Photo } from './photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:any;
  constructor(private photoServcie :PhotosService,private activeRoute: ActivatedRoute,private router:Router) { }
  albumId:number;
  userId:number;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if(params['id']) {
        this.userId = params['userId'];
          this.getPhotos(params['id']);
      }
    });
  }

  getPhotos(photoId){
   this.albumId = photoId;
    this.photoServcie.getPhotos().subscribe(
      (res:Photo[]) =>{
        this.photos = res.filter(function(album) {
          return album.albumId == photoId;
        });
      },
      err => {

      }
    )

  }

  onBack(){
    this.router.navigate(['/albums',  this.albumId,{userId:this.userId}]); 
  }
}
