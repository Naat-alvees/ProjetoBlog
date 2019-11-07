import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post.modal';
import { Comment } from '../models/comment.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public modaleditar: BsModalRef;
  
  public id_post : number;
  public post : Post = new Post();
  public comments: Comment[];
  public formularioEditar: FormGroup = new FormGroup({
    'autor': new FormControl(null, [Validators.required]),
    'titulo': new FormControl(null),
    'corpo': new FormControl(null)
  });; 

  constructor(private route: ActivatedRoute, private postService : PostService, private commentService: CommentService, private modalService: BsModalService) { }

  ngOnInit() {

    this.id_post = this.route.snapshot.params['id'];

    // Le o post
    this.postService.getPost(this.id_post).subscribe(res => {
      this.post = res[0];
      this.formularioEditar.patchValue({
        autor: this.post.author,
        titulo: this.post.title,
        corpo: this.post.body,
      });
      console.log(this.post)
      }, err => {
      console.log(err);
    });


    //Le os comentarios do post
    this.commentService.getComments().subscribe(res => {
      this.comments = res;
    }, err => {
      console.log(err);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modaleditar = this.modalService.show(template);
  }

  public editarPost(): void{
    // let post: Post = this.post
    let post: Post = new Post();
    post.author = this.formularioEditar.value.autor;
    post.body = this.formularioEditar.value.corpo;
    post.title = this.formularioEditar.value.titulo;
    // this.post = post;
    console.log(post)
    this.postService.updatePost(this.id_post, post).subscribe( res => {
      this.ngOnInit();
      this.modaleditar.hide()
    }, (err) => {
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

  public botaoClicado() {
    alert('Botão clicado!');
 }

  public getNumeroaleatorio(){
    let min = 1;
    let max = 6;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
