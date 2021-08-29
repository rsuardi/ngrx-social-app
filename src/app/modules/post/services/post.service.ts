import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { LoadPostErrorResponse, LoadPostRequest, LoadPostSuccessResponse } from "../models";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { PostModule } from "../post.module";

@Injectable()
export class PostService {

    private readonly API: {
        getPosts?: { url: string, method: string },
        getPost?: { url: string, method: string },
        addPost?: { url: string, method: string },
        editPost?: { url: string, method: string },
        deletePost?: { url: string, method: string },
    };
    constructor(public http: HttpClient) {
        this.API = {
            getPosts: { url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET' },
            getPost: { url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET' },
            addPost: { url: 'https://jsonplaceholder.typicode.com/posts', method: 'POST' },
            editPost: { url: 'https://jsonplaceholder.typicode.com/posts', method: 'PATCH' },
            deletePost: { url: 'https://jsonplaceholder.typicode.com/posts', method: 'PUT' },
        }
    }

    getPosts(request: LoadPostRequest = null): Observable<LoadPostSuccessResponse[]> {
        return this.http.get<LoadPostSuccessResponse[]>(this.API.getPosts.url).pipe(catchError((error) => throwError(error.message)));
    }

    getPost(id: number) {
        return this.http.get(`${this.API.getPost.url}/${id}`).pipe(catchError((error: any) => throwError(error.message)));
    }

    addPost(request: LoadPostRequest) {
        return this.http.post(this.API.getPosts.url, { request }).pipe(catchError((error: any) => throwError(error.message)));
    }

    editPost(request: LoadPostRequest) {
        return this.http.patch(this.API.getPosts.url, { request }).pipe(catchError((error: any) => throwError(error.message)));
    }

    deletePost(id: number) {
        return this.http.put(this.API.getPosts.url, { id }).pipe(catchError((error: any) => throwError(error.message)));
    }
}