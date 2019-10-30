import { Post } from './models/post.modal';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// const httpOptions = {
//     headers: new HttpHeaders({'Content-Type': 'application/json'})
//   };

// const  apiUrl  = 'http://localhost:3000/post';

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class PostService{

    // constructor(private http: HttpClient) {}

   
    private posts: Array<Post> = [
        {
            id: 1,
            title: "Era uma vez",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            author: "Maria Aparecida",
            date: "10/06/1997",
            nComments: 10,
        },
        {
            id: 2,
            title: "Uma nova eta",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            author: "João carlos",
            date: "23/10/2019",
            nComments: 10,
        }
    ]

    public getPosts(): Array <Post>{
        return this.posts;
    }


    // public getPosts (): Observable<Post[]> {
    //     return this.http.get<Post[]>(apiUrl)
    //       .pipe(
    //         tap(post => console.log('leu os posts')),
    //         catchError(this.handleError('getPosts', []))
    //       );
    // }

    // public getPost(id: number): Observable<Post> {
    //     const url = `${apiUrl}/${id}`;
    //     return this.http.get<Post>(url).pipe(
    //       tap(_ => console.log(`leu o post id=${id}`)),
    //       catchError(this.handleError<Post>(`getPost id=${id}`))
    //     );
    // }

    // public addPost (post): Observable<Post> {
    //     return this.http.post<Post>(apiUrl, post, httpOptions).pipe(
    //       tap((post: Post) => console.log(`adicionou o post com w/ id=${post.id}`)),
    //       catchError(this.handleError<Post>('addPost'))
    //     );
    // }

    // public updatePost(id, post): Observable<any> {
    //     const url = `${apiUrl}/${id}`;
    //     return this.http.put(url, post, httpOptions).pipe(
    //       tap(_ => console.log(`atualiza o post com id=${id}`)),
    //       catchError(this.handleError<any>('updatePost'))
    //     );
    // }

    // public deletePost (id): Observable<Post> {
    //     const url = `${apiUrl}/delete/${id}`;
    //     return this.http.delete<Post>(url, httpOptions).pipe(
    //       tap(_ => console.log(`remove o post com id=${id}`)),
    //       catchError(this.handleError<Post>('deletePost'))
    //     );
    // }
    
    // private handleError<T> (operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    
    //       console.error(error);
    
    //       return of(result as T);
    //     };
    // }

}