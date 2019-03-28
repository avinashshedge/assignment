import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlbumsService {
    
    baseURL: string = 'https://jsonplaceholder.typicode.com/';
    
    constructor(private httpClient: HttpClient) { }

    public getAlbums() {
        let apiUrl : string = this.baseURL +  "albums";
        return this.httpClient.get(apiUrl);
    }
}