import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post'
import { PostService } from '../post.service';

@Component({
  selector: 'app-description-blocks',
  templateUrl: './description-blocks.component.html',
  styleUrls: ['./description-blocks.component.css']
})
export class DescriptionBlocksComponent implements OnInit {
  @Input() post?: Post;
  panelOpenState = false;
  nums = [0, 1, 2, 3, 4, 5, 6, 7];
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
