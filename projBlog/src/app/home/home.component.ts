import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ PostService ]
})
export class HomeComponent implements OnInit {

  public posts : Post[]

  constructor(private postService : PostService) { }

  ngOnInit() {
    // this.posts = this.postService.getPosts();

    this.postService.getPosts().subscribe(res => {
      this.posts = res;
      this.posts = this.posts.reverse();
      console.log(this.posts);
    }, err => {
      console.log(err);
    });
    
  }

}
