import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  private baseUrl = 'api/hello';

  constructor(private http: HttpClient) {
  }

  getMessage(name: string): Observable<string> {
    const params = new HttpParams()
      .set('name', name);

    return this.http.get<string>(`${this.baseUrl}/message`, {params, responseType: 'text' as 'json'})
      .pipe(
        catchError((response: Response) => {
          console.log('getMessage error, response: ' + JSON.stringify(response));
          throw response;
        })
      );
  }
}
