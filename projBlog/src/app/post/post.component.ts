import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post.modal';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public id_post:number;
  public post : Post;

  constructor(private route: ActivatedRoute, private postService : PostService) { }

  ngOnInit() {
    this.id_post = this.route.snapshot.params['id'];

    this.postService.getPost(this.id_post).subscribe(res => {
      this.post = res[0];
      console.log(this.post);
    }, err => {
      console.log(err);
    });
  }



}
