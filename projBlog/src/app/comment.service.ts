import { Comment } from './models/comment.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

const  apiUrl  = 'http://localhost:3000/comment';

@Injectable({
    providedIn: 'root'
})


@Injectable()
export class CommentService{
    constructor(private http: HttpClient) {}

    public getComments (): Observable<Comment[]> {
        return this.http.get<Comment[]>(apiUrl)
          .pipe(
            tap(),
            catchError(this.handleError('getComment', []))
          );
    }

    public getComment(id: number): Observable<Comment> {
        const url = `${apiUrl}/${id}`;
        return this.http.get<Comment>(url).pipe(
          tap(),
          catchError(this.handleError<Comment>(`getComment id=${id}`))
        );
    }

    public addComment (comentario): Observable<Comment> {
        return this.http.post<Comment>(apiUrl, comentario, httpOptions).pipe(
          tap(),
          catchError(this.handleError<Comment>('addComment'))
        );
    }

    public updateComment(id, comment): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, comment, httpOptions).pipe(
          tap(),
          catchError(this.handleError<any>('updateComment'))
        );
    }

    public deleteComment (id): Observable<Comment> {
        const url = `${apiUrl}/delete/${id}`;
        return this.http.delete<Comment>(url, httpOptions).pipe(
          tap(),
          catchError(this.handleError<Comment>('deleteComment'))
        );
    }
    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
    
          return of(result as T);
        };
    }
}