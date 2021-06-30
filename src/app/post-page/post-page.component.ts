import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post'
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  @Input() post?: Post;
  constructor(
    private route: ActivatedRoute,
    private heroService: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }
  
  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getPost(id)
      .subscribe(post => this.post = post);
  }
  goBack(): void {
    this.location.back();
  }

}
