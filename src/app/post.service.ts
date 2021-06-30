import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  getPosts(): Observable<Post[]> {
    const heroes = of(POSTS);
    return heroes;
    }
  getPost(id: number): Observable<Post> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const post = POSTS.find(h => h.id === id)!;
    return of(post);
  }
}
