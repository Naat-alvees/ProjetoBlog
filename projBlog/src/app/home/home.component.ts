import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../models/post.modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ PostService ]
})
export class HomeComponent implements OnInit {

  public posts : Post[]
  public paginaAtual = 1;


  constructor(private postService : PostService, private router: Router) { 
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
    
    if(formulario.valid){
      let post: Post = new Post(formulario.value.title, formulario.value.bodyPost, formulario.value.author);
      this.postService.addPost(post).subscribe( res => {
        formulario.reset();
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
    } 
  }

}
