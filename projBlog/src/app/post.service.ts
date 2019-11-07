import { Post } from './models/post.modal';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

const  apiUrl  = 'http://localhost:3000/post';

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class PostService{

    constructor(private http: HttpClient) {}



    public getPosts (): Observable<Post[]> {
        return this.http.get<Post[]>(apiUrl)
          .pipe(
            tap(),
            catchError(this.handleError('getPosts', []))
          );
    }

    public getPost(id: number): Observable<Post> {
        const url = `${apiUrl}/${id}`;
        return this.http.get<Post>(url).pipe(
          tap(),
          catchError(this.handleError<Post>(`getPost id=${id}`))
        );
    }

    public addPost (post): Observable<Post> {
        return this.http.post<Post>(apiUrl, post, httpOptions).pipe(
          tap(),
          catchError(this.handleError<Post>('addPost'))
        );
    }

    public updatePost(id, post): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, post, httpOptions).pipe(
          tap(),
          catchError(this.handleError<any>('updatePost'))
        );
    }

    public deletePost (id): Observable<Post> {
        const url = `${apiUrl}/${id}`;
        return this.http.delete<Post>(url, httpOptions).pipe(
          tap(),
          catchError(this.handleError<Post>('deletePost'))
        );
    }
    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
    
          return of(result as T);
        };
    }

}