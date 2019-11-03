import { Contact } from './models/contact.model';
import { Observable, of } from 'rxjs';
import {  HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';



const  apiUrl  = 'http://localhost:3000/contact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ContactService{

    constructor(private http: HttpClient) {}

    public efetivarContato (contato: Contact): Observable<Contact> {
      
      return this.http.post<Contact>(apiUrl,JSON.stringify(contato), 
        httpOptions
      )
      .pipe(catchError(this.handleError<Contact>('efetivarContato')));
    }

    
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error);
  
        return of(result as T);
      };
    }

}