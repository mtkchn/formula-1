import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({ headers: request.headers.set('x-rapidapi-host', 'api-formula-1.p.rapidapi.com') });
    request = request.clone({ headers: request.headers.set('x-rapidapi-key', '8e0df3e8b84ee79e3eadda0310c4bc0e') });

    return next.handle(request);

  }

}