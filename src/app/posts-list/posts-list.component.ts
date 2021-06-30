import { Component, OnInit } from '@angular/core';
import { Post } from '../post'
import { PostService } from '../post.service'
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private heroService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.heroService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

}
