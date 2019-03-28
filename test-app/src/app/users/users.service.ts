import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
    
    baseURL: string = 'https://jsonplaceholder.typicode.com/';
    
    constructor(private httpClient: HttpClient) { }

    public getUser() {
        let apiUrl : string = this.baseURL +  "users";
        return this.httpClient.get(apiUrl);
    }
}