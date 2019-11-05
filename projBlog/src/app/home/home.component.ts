import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  public paginaAtual = 1;


  constructor(private postService : PostService) { 
  }

  

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


  public addPost(formulario: NgForm): void {
    let post: Post = new Post();
    post.author = formulario.value.author;
    post.body = formulario.value.bodyPost;
    post.title = formulario.value.title;
    this.postService.addPost(post).subscribe( res => {
      formulario.reset();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
     
  }

}
