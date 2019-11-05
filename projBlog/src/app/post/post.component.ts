import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post.modal';
import { Comment } from '../models/comment.model';
import { NgForm } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public id_post:number;
  public post : Post;
  public comments: Comment[];

  constructor(private route: ActivatedRoute, private postService : PostService, private commentService: CommentService) { }

  ngOnInit() {
    this.id_post = this.route.snapshot.params['id'];

    // Le o post
    this.postService.getPost(this.id_post).subscribe(res => {
      this.post = res[0];
      console.log(this.post);
    }, err => {
      console.log(err);
    });

    //Le os comentarios do post
    this.commentService.getComments().subscribe(res => {
      console.log(res);
      this.comments = res;
      this.comments = this.comments.reverse();
    }, err => {
      console.log(err);
    });

  }

  public addComentario(formulario: NgForm): void {
    let comentario: Comment = new Comment(this.id_post, formulario.value.title,formulario.value.body, formulario.value.email, formulario.value.author);
    console.log(comentario)
    this.commentService.addComment(comentario).subscribe( res => {
      formulario.reset();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
     
  }



}
