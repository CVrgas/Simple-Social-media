import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { posts } from '../Models/posts.models';
import { Observable } from 'rxjs';
import { comments } from '../Models/comments.models';
import { photos } from '../Models/photos.models';
import { users } from '../Models/users.models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<posts[]>
  {
    return this.http.get<posts[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getpost(id: string): Observable<posts>{
    return this.http.get<posts>('https://jsonplaceholder.typicode.com/posts/'+ id)
  }
  getComments(id: string): Observable<comments[]> {
    return this.http.get<comments[]>('https://jsonplaceholder.typicode.com/comments?postId='+id)
  }
  getPhoto(id: string): Observable<photos>{
    return this.http.get<photos>('https://jsonplaceholder.typicode.com/photos/'+ id)
  }
  getUser(id: string): Observable<users>{
    return this.http.get<users>('https://jsonplaceholder.typicode.com/users/' + id)
  }
}
