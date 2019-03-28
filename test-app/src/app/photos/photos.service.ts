import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotosService {
    
    baseURL: string = 'https://jsonplaceholder.typicode.com/';
    
    constructor(private httpClient: HttpClient) { }

    public getPhotos() {
        let apiUrl : string = this.baseURL +  "photos";
        return this.httpClient.get(apiUrl);
    }
}